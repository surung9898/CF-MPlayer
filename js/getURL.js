function loadImg(isTrue) {
    var src = document.getElementById("isCodeforces");
    var img = document.createElement("img");
    img.height = 200;
    img.width = 200;

    if (isTrue == 1) {
        img.src = "/image/Codeforces.jpg";
        document.getElementById("pictureText").innerHTML = "*Click to start listening!*";
    } else {
        img.src = "/image/notCodeforces.jpg";
        document.getElementById("pictureText").innerHTML ="No Codeforces, No Music! X("
    }

    src.appendChild(img);
}

chrome.tabs.query(
    {
        currentWindow: true,
        active: true
    }, function (tabs) {
        if (tabs.length > 0) {
            var url = tabs[0].url;

            if (url.search("codeforces.com") != -1) {
                loadImg(1);
            }
            else {
                loadImg(0);
            }
        }
    }
)
/*

var url = window.location.href;
var getList = require('./getList').getList

if (url == "https://codeforces.com/") {
    var pathname = window.location.pathname;
    var pathnameSlice = pathname.split('/')
    
    if (pathnameSlice[1] == 'contest') {
        var status = document.getElementsByClassName("contest-state-phase")[0].innerHTML;

        if (status == "Contest is running") {
            await getStart();
        }
    }
}
*/