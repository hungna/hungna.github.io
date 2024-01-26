$(document).ready(function () {
    $(".location-tag").click(function () {
        if (!$(this).hasClass("selected")) {
            $(".location-tag").removeClass("selected");
            $(this).toggleClass("selected");
        } else {
            $(this).toggleClass("selected");
        }
    });
    $(".music-tag").click(function () {
        if (!$(this).hasClass("selected")) {
            $(".music-tag").removeClass("selected");
            $(this).toggleClass("selected");
        } else {
            $(this).toggleClass("selected");
        }
    });
    $("#btnPlayNow").click(function () {
        if ($(".location-tag.selected").attr("tag-id") == undefined) {
            alert("Please select Location");
            return;
        }

        if ($(".music-tag.selected").attr("tag-id") == undefined) {
            alert("Please select Music List");
            return;
        }

        // document.location.href = "" + base_url + "den-" + $(".location-tag.selected").attr("tag-id") + "-va-nghe-nhac-" + $(".music-tag.selected").attr("tag-id") + ".html";
        document.location.href = "" + base_url + "home/playlist/" + $(".location-tag.selected").attr("tag-id") + "/" + $(".music-tag.selected").attr("tag-id");
    });
});
//facebook apps
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8&appId=243346190103114";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));