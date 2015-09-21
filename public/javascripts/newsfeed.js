$( document ).ready(function() {

});
google.load("feeds", "1");
$("#search-form").submit(function(event) {
    // Prevent from from reloading the page
    event.preventDefault();
  // Get name from site dropdown menu
  var site = "site:" + $("#news-site").val();
  // Get search term(s)
  var searchTerm = $("#search-value").val();
  // Create query
  var query = site + ' ' + searchTerm;

// TODO: Functionality for searching multiple sites
/*
  var sites = [];
  $.each($("input[name='site']:checked"), function() {
    sites.push($(this).val());
  });
  alert("The sites checked are: " + sites.join(", "));
*/

  google.feeds.findFeeds(query, findDone);
});

function findDone(result) {
  // Check for errors
  if (!result.error) {
    // Assign variables for "content" ul
    var content = document.getElementById('content');
    var html = '';
    console.log(result.entries);
    // Loop through the results and print out the title and link "Read more" to the url.
    for (var i = 0; i < result.entries.length; i++) {
      var entry = result.entries[i];
      html += '<li>' + '<span class="title">' + entry.title + '</span>' + '<br>' + entry.contentSnippet + ' <a target="_blank" href="' + entry.link + '">' + "Read more" + '</a></li>';
    }
    content.innerHTML = html;
  }
}
// google.setOnLoadCallback();