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






// AJAX VERSION
/*
$(document).ready(function() {
  // When the form is submitted
  $("#search-form").submit(function(event) {
    // Prevent from from reloading the page
    event.preventDefault();

    // Get the value from the search field
    var q = $("#search-value").val();

    // Clear the previous search results, if they exist
    $("#results").html("");
      searchQuery(q);
  });

  // Search by album
  function searchQuery(q) {
    $.ajax({
      type: "get",
      url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=" + q,
      dataType: "json",

      // Put search value into AJAX request params
      // On success
      success: function(data, textStatus, jqXHR) {
        var stories = data.stories.items;

        for (var i = 0; i < stories.length; i++) {
          // Output each result
          // console.log(stories[i]);
          var story = stories[i];
          var storyTitle = story.title;
          // console.log(storyTitle);

          var html = $("<li>" + storyTitle + "</li>");
          $("#results").prepend(html);
        }
      },
      // On error
      error: function(jqXHR, textStatus, errorThrown) {
        // Alert the user
        console.log("There was a problem loading the data!");
      }
    });
  }
});
*/