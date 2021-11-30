/*
 *Summary: .js script that acesses internet API
 *Description: accesses random photographs of cute dogs from free API
*@link: https://ryanpalmberg.github.io/art101/
 *@file: ordinary .js file.
 *@Author: Ryan Palmberg <rpalmber@ucsc.edu>
 *@since  11.29.21
*/

$("#activate").click(Aj);
function Aj() {
// Using the core $.ajax() method
  $.ajax({
    // API link
    url: "https://dog.ceo/api/breeds/image/random",
    data: {
            id: 123,
            api_key: 'somethin',
          },

    type: "GET",

    dataType : "json",

    success: function(data) {
        console.log(data);

        // Accessing link in object
        var imgUrl = data.message;

        // Putting readable link to variable
        var imgTag = "<img src=" + imgUrl + ">";

        // Updating cute photographs
        $("#output").html(imgTag);
      },
      error: function (jqXHR, textStatus, errorThrown) {

          console.log("Error:", textStatus, errorThrown);
      }
  })
}
// console.log(Aj())
