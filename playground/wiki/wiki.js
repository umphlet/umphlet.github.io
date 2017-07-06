$("#searchform").submit(function(event) {
    event.preventDefault();
    var x = $("#searchQuery").val();
    var dataurl = 'https://en.wikipedia.org/w/api.php?format=json&indexpageids=1&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + x + '&utf8=';
    getData(function(data) {
        var y = data.query.pageids.length;
        var listString = '<dl id="searchList">';
        for (var i = 0; i < y; i++) {
            listString += '<div class="listItem">';
            if (data.query.pages[data.query.pageids[i]].thumbnail) {
              listString += '<img src="' + data.query.pages[data.query.pageids[i]].thumbnail.source + '">';
            } else {
              listString += '<img src="/img/questionblock.png">';
            }
            listString += '<dt><a href="https://en.wikipedia.org/?curid=' + data.query.pageids[i] + '" target="_blank">' +
                data.query.pages[data.query.pageids[i]].title +
                '</a></dt> <dd>' + data.query.pages[data.query.pageids[i]].extract + '</dd></div>';
        }
        listString += '</dl>';
        $("#articleList").html(listString);
    }, dataurl);
});

function getData(success, url) {
    $.ajax({
        dataType: "jsonp",
        url: url,
        success: success
    });
}
