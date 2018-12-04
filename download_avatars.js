var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// In the next step you will implement the function to use the request
// library to programmatically fetch the list of contributors via HTTPS
// for the given repo.


console.log('Welcome to the GitHub Avatar Downloader!');


