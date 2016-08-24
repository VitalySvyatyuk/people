    $.ajax({
        type: 'GET',
        url: 'http://localhost:8888/people.json',
        success: function(data) {
            var items = [];
            $.each(data, function(key, value) {
                if (value.followed) {
                    var follow = "remove.png";
                    var imgclass = "unfollow";
                } else {
                    var follow = "add.png";
                    var imgclass = "follow";
                };

                items.push("<tr>");
                items.push("<td><img src='/img/"+value.avatar+"'></td>");
                items.push("<td>"
                    + "<a href='#' class='namefont'>"+value.name+"</a>"
                    + "<span> </span>"
                    + "<img src='img/"+follow+"' class='"+imgclass+"'>"
                    + "</br>"
                    + "<img src='img/rating.png'>"
                    + "<span> </span>"
                    + "<span class='tablefont'>"+value.rating+"</span>"      
                    + "</td>");
                items.push("<td class='tablefont'>"+value.Ideas+"</td>");
                items.push("<td class='tablefont'>"+value.Following+"</td>");
                items.push("<td class='tablefont'>"+value.Followers+"</td>");
                items.push("</tr>");
            });
            var n = 77
            $("#show").on("click", function() {
                if (n + 77 > items.length) {
                    $("<tbody/>", {html: items.slice(n, items.length).join("")}).appendTo("table").hide().show("slow");
                    $(this).remove();
                } else {
                    $("<tbody/>", {html: items.slice(n, n+77).join("")}).appendTo("table").hide().show("slow");
                    n += 77;  
                }
            })
            $("<tbody/>", {html: items.slice(0, 77).join("")}).appendTo("table");


        }

    })    














$(document).on("mouseenter", ".follow", function() {
    $(this).fadeOut(150, function() {
        var btn = $("<button class='butt followbutton'>Follow</button>");
        $(this).replaceWith(btn);
        $(".followbutton").show(150);
        $(".followbutton")
            .on("click", function() {
                var imgnew = $("<img />", {
                   class: "unfollow",
                   src: "img/remove.png",
                }).hide();
                $(this).hide(150);
                $(this).replaceWith(imgnew);
                $(".unfollow").show(150);
            })
            .on("mouseleave", function() {
                var imgback = $("<img />", {
                   class: "follow",
                   src: "img/add.png",
                }).hide();
                $(this).hide(150);
                $(this).replaceWith(imgback);
                $(".follow").show(150);
            });
        });
    });

$(document).on("mouseenter", ".unfollow", function() {
    $(this).fadeOut(150, function() {
        var btn = $("<button class='butt unfollowbutton'>Unfollow</button>");
        $(this).replaceWith(btn);
        $(".unfollowbutton").show(150);
        $(".unfollowbutton")
            .on("click", function() {
                var imgnew = $("<img />", {
                   class: "follow",
                   src: "img/add.png",
                }).hide();
                $(this).hide(150);
                $(this).replaceWith(imgnew);
                $(".follow").show(150);
            })
            .on("mouseleave", function() {
                var imgback = $("<img />", {
                   class: "unfollow",
                   src: "img/remove.png",
                }).hide();
                $(this).hide(150);
                $(this).replaceWith(imgback);
                $(".unfollow").show(150);
            });
        });
    });