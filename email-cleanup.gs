function myFunction() {
  var batchSize = 100 // Process up to 100 threads at once
  var searchSize = 400 // Limit search result to a max of 400 threads. Use this if you encounter the "Exceeded maximum execution time" error
  
  var threads = GmailApp.search('label:inbox from:no-reply@hello.us.mercari.com', 0, searchSize);
  for (j = 0; j < threads.length; j+=batchSize) {
    GmailApp.moveThreadsToTrash(threads.slice(j, j+batchSize));
  }
}