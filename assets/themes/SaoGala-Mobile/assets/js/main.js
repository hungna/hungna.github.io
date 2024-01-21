Ict = {}
Ict.defaultKeyword = 'T\u00ecm ki\u1ebfm';
Ict.init = function () {
    $(document).ready(function () {
        $('#searchIcon').click(function () {
            if ($('#searchBox').css('display') == 'none') {
                $('#searchBox').slideDown('fast');
            } else {
                $('#searchBox').slideUp('fast');
            }
        });
        $('#menuIcon, .close').click(function () {
            if ($('#hamburger').css('display') == 'none') {
                $('#hamburger').slideDown('fast');
            } else {
                $('#hamburger').slideUp('fast');
            }
        });
        $('#txtSearch').blur(function () {
            if ($(this).val() == '') {
                $(this).val(Ict.defaultKeyword);
            }
        });
        $('#txtSearch').focus(function () {
            if ($(this).val() == Ict.defaultKeyword) {
                $(this).val('');
            }
        });
        $('#txtSearch').keypress(function (e) {
            Ict.search(e);
        });
        $('#btnSearch').click(function () {
            Ict.doSearch();
        });
        if (typeof $_Keyword != 'undefined') {
            $('#txtSearch').val($_Keyword);
        }
        $('#gotop').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 300);
            return false;
        });
        $('#btnLastest').click(function () {
            if ($('#lastestBox').css('display') == 'none') {
                $('#lastestBox').css('display', 'block');
                $('#hotingBox').css('display', 'none');
                $('#left_btn a').css('color', '#004176');
                $('#right_btn a').css('color', '#fff');
                $('#left_btn').css('background', 'url(../images/title_left.png) repeat-x center left');
                $('#right_btn').css('background', 'url(../images/title_right.png) repeat-x center right');
                $('#div_denter').css('background', 'url(../images/title_center.png) no-repeat center left');
            }
        });
        $('#btnHoting').click(function () {
            if ($('#hotingBox').css('display') == 'none') {
                $('#lastestBox').css('display', 'none');
                $('#hotingBox').css('display', 'block');
                $('#left_btn a').css('color', '#fff');
                $('#right_btn a').css('color', '#004176');
                $('#left_btn').css('background', 'url(../images/title_right.png) repeat-x center right');
                $('#right_btn').css('background', 'url(../images/title_left.png) repeat-x center left');
                $('#div_denter').css('background', 'url(../images/title_center2.png) no-repeat center left');
            }
        });
    });
}
Ict.doSearch = function () {
    var keyWord = $('#txtSearch').val();
    if (keyWord != '' && keyWord != Ict.defaultKeyword) {
        if (/<\/?[^>]+>|<\/?[^>]|href|src/.test(keyWord)) {
            alert('Vui l\u00f2ng kh\u00f4ng nh\u1eadp t\u1eeb kh\u00f3a c\u00f3 ch\u1ee9a th\u1ebb ho\u1eb7c thu\u1ed9c t\u00ednh html');
            return false;
        }
        keyWord = keyWord.replace(/<\/?[^>]+>|<\/?[^>]|href|src/, '');
        keyWord = Ict.trim(keyWord, ' ');
        keyWord = keyWord.replace(/\s/g, '+');
        keyWord = keyWord.replace('/|\'| ', '+');
        keyWord = keyWord.replace(/[[\]{}()*?.,\\^$|#\s<>]/g, '');
        window.location.href = $_WebsiteDomain + 'search?q=' + keyWord + '';
    } else {
        alert("Bạn chưa nhập từ khóa để thực hiện tìm kiếm");
    }
    return false;
}
Ict.search = function (e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        Ict.doSearch();
        if (e.stopPropagation != undefined) e.stopPropagation(); else if (e.cancelBubble != undefined) e.cancelBubble = true; if (e.preventDefault != undefined) e.preventDefault(); else e.returnValue = false;
    }
}
Ict.ltrim = function (str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
Ict.rtrim = function (str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
Ict.trim = function (str, chars) {
    return Ict.ltrim(Ict.rtrim(str, chars), chars);
}
Ict.viewMore = function () {
    if (Ict.viewMoreState == 1) return false;
    var viewMoreEle = $('#viewMore');
    if (viewMoreEle) {
        var publisherId = $('#listArticles div.articleItem:last').attr('id');
        if (typeof publisherId != 'undefined') {
            publisherId = publisherId.replace('a_', '');
            Ict.viewMoreState = 1;
            var currentHtml = viewMoreEle.html();
            viewMoreEle.html("<div style=\"width:100%; text-align:center;padding:5px 0;\"><img alt=\"Xem them\" src=\"" + $_StaticDomain + "/images/loading.gif\" /></div>");
            $.get($_WebsiteDomain + 'viewmore/list/' + publisherId + '/' + $_CurrentChannel + '/',
            function (data) {
                if (data != "" && typeof data == 'string') {
                    try {
                        $('#listArticles').append(data);
                        $('#listArticles img[src=""]').css('display', 'none');
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    viewMoreEle.hide();
                }
                viewMoreEle.html(currentHtml);
                Ict.viewMoreState = 0;
            });
        }
    }
    return false;
}
Ict.viewMore_search = function () {
    if (Ict.viewMoreState == 1) return false;
    var viewMoreEle = $('#viewMore');
    if (viewMoreEle) {
        var publisherId = $('#listArticles div.articleItem:last').attr('id');
        if (typeof publisherId != 'undefined') {
            publisherId = publisherId.replace('a_', '');
            Ict.viewMoreState = 1;
            var currentHtml = viewMoreEle.html();
            viewMoreEle.html("<div style=\"width:100%; text-align:center;padding:5px 0;\"><img alt=\"Xem them\" src=\"" + $_StaticDomain + "/images/loading.gif\" /></div>");

            $.get($_WebsiteDomain + 'viewmore/search/' + publisherId + '/' + $_keyword + '/',
            function (data) {
                if (data != "" && typeof data == 'string') {
                    try {
                        $('#listArticles').append(data);
                        $('#listArticles img[src=""]').css('display', 'none');
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    viewMoreEle.hide();
                }

                viewMoreEle.html(currentHtml);
                Ict.viewMoreState = 0;
            });
        }
    }
    return false;
}
Ict.init();