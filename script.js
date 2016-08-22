$.getJSON("file:///home/vitaly/work/TradingView/people/people.json", function(data) {
    var items = [];
    $.each(data, function(key, value) {
        items.push("<tr");
        items.push("<td id=''"+key+"''>"+value.name+"</td>");
        items.push("<td id=''"+key+"''>"+value.avatar+"</td>");
        items.push("<td id=''"+key+"''>"+value.rating+"</td>");
        items.push("<td id=''"+key+"''>"+value.followed+"</td>");
        items.push("<td id=''"+key+"''>"+value.Ideas+"</td>");
        items.push("<td id=''"+key+"''>"+value.Following+"</td>");
        items.push("<td id=''"+key+"''>"+value.Followers+"</td>");
        items.push("</tr>");
    });
    $("<tdoby/>", {html: items.join("")}).appendTo("table");
});