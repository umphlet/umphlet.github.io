var streamers = ["sumphlet", "ESL_SC2", "OgamingSC2", "brunofin", "cretetion", "freecodecamp", "storbeck", "habathcx", "comster404", "RobotCaleb", "noobs2ninjas", "rageselect", "terakilobyte", "thomasballinger", "Beohoff", "test_channel", "sheevergaming", "TR7K"];
var apiUrlBase = 'https://api.twitch.tv/kraken/channels/';
//var dummyLogo = 'http://dummyimage.com/50x50/000/ffffff.png&text=NO+LOGO';
var dummyLogo = 'http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png';
var closedLogo = 'http://dummyimage.com/50x50/000/ff0000.png&text=CLOSED';
var showOnline = true;
var showOffline = true;
var showDeleted = true;
var htmlBlock = '';
var apiUrl = '';
var logo = '';

function getStreams() {
    streamers.forEach(function(stream) {
        apiUrl = apiUrlBase + stream;
        getData(function(data) {
            if (data.status === null) {
                if (data.logo != null) {
                    logo = data.logo;
                } else {
                    logo = dummyLogo;
                }
                htmlBlock = '<div class="offline-block"><div class="row"><div class="col-xs-2"><center><img src="' + logo + '" alt="logo"></center></div><div class="col-xs-10"><p><a href="'+ data.url + '">' + stream + ' is offline</a></p></div></div></div>';
                $(".offline").append(htmlBlock);
            } else if (data.status == 422) {
                logo = closedLogo;
                htmlBlock = '<div class="closed-block"><div class="row"><div class="col-xs-2"><center><img src="' + logo + '" alt="logo"></center></div><div class="col-xs-10"><p>' + stream + ' is closed or doesn\'t exist</p></div></div></div>';
                $(".closed").append(htmlBlock);
            } else if (data.game) {
                if (data.logo != null) {
                    logo = data.logo;
                } else {
                    logo = dummyLogo;
                }
                htmlBlock = '<div class="online-block"><div class="row"><div class="col-xs-2"><center><img src="' + logo + '" alt="logo"></center></div><div class="col-xs-10"><p><a href="'+ data.url + '">' + stream + ' is playing ' + data.game + ' -- ' + data.status + '</a></p></div></div></div>';
                $(".online").append(htmlBlock);
            }

        }, apiUrl);

    });

};

function getData(success, url) {
    $.ajax({
        dataType: "jsonp",
        url: url,
        success: success
    });
};

$(document).ready(function() {
    getStreams();
});
