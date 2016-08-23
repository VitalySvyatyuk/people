$.getJSON("http://localhost:8888/people.json", function(data) {
    var items = [];
    $.each(data, function(key, value) {

        if (value.followed) {
            var follow = "remove.png"
        } else {
            var follow = "add.png"
        };

        items.push("<tr>");
        items.push("<td id="+key+"><img src='/img/"+value.avatar+"'></td>");
        items.push("<td id="+key+">"
            + "<a href='#' class='namefont'>"+value.name+"</a>"
            + "<span> </span>"
            + "<img src='img/"+follow+"' class='follow'>"
            + "</br>"
            + "<img src='img/rating.png'>"
            + "<span> </span>"
            + "<span class='tablefont'>"+value.rating+"</span>"      
            + "</td>");
        items.push("<td id="+key+" class='tablefont'>"+value.Ideas+"</td>");
        items.push("<td id="+key+" class='tablefont'>"+value.Following+"</td>");
        items.push("<td id="+key+" class='tablefont'>"+value.Followers+"</td>");
        items.push("</tr>");
    });

    $("<tbody/>", {html: items.join("")}).appendTo("table");


    $(".follow")
        .mouseenter(function(e) {
            console.log("some");
        })
        .mouseleave(function(e) {
            console.log("some");
        });


});

