$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
            id: 124,
            api_key: "newbie",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        var comic = data.img;
        var title = data.title;
        var caption = data.alt;
        console.log(comic);
        var imgTag = "<img src=" + comic + ">";
        $("#output").html(imgTag);
        $("#title").html(title);
        $("#caption").html(caption);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log(data)
        console.log("Error:", textStatus, errorThrown);
    }
})
