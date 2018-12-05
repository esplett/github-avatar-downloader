var request = require('request');
var secrets = require('./secrets.js')
var fs = require('fs');
//how do i require the secrets.js file?

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/"
    + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function(err, res, body) {
    cb(err, JSON.parse(body)); //parsing into an array
  });
}

//for loop in here instead of console.logging results
//loop over array and print each avatar url
// .avatar_url, array is the result

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
    for (i = 0; i < result.length; i++){
      console.log(result[i].avatar_url)
    }
});



function downloadImageByURL(url, filePath) {

request.get(url)
  .on('error', function (err) {        // Note 2
         throw err;
       })
       .on('response', function (response, message, headers) {
         console.log('Downloading image...')    // Note 3
       })

       .on('end', function() {
          console.log('Download complete.')
       })

       .pipe(fs.createWriteStream(filePath))
}


console.log('Welcome to the GitHub Avatar Downloader!');
downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")


