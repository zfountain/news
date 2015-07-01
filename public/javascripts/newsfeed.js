/*
*  How to find a feed based on a query.
*/

// Get the value from the search field
google.load("feeds", "1");

$("#search-form").submit(function(event) {
    // Prevent from from reloading the page
    event.preventDefault();
  // Query for president feeds on cnn.com
  var site = "site:" + $("#news-site").val();
  var searchTerm = $("#search-value").val();
  var query = site + ' ' + searchTerm;

// TODO: Checkbox functionality for searching multiple sites
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
  // Make sure we didn't get an error.
  if (!result.error) {
    // Get content div
    var content = document.getElementById('content');
    var html = '';

    // Loop through the results and print out the title of the feed and link to
    // the url.
    for (var i = 0; i < result.entries.length; i++) {
      var entry = result.entries[i];
      html += '<li><a href="' + entry.link + '">' + entry.title + '</a></li>';
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