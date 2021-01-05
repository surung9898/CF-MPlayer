var img = document.createElement("img");
var txt;

img.height = 200;
img.width = 200;

function get_url() {
    return new Promise((resolve) => {
        chrome.tabs.query(
            {
                currentWindow: true,
                active: true
            }, function (tabs) {
                if (tabs.length > 0) {
                    var url = tabs[0].url;

                    if (url.search("codeforces.com") != -1) {
                        resolve(1);
                    }
                    else {
                        resolve(0);
                    }
                }
            }
        )
    });
}

async function get_start(is_checked) {
    if (is_checked) {
        var aaa = document.getElementById("isCodeforces");

        if (aaa.lastChild)
            aaa.removeChild(aaa.lastChild);

        img.src = "/image/codeforcesStart.png";
        document.getElementById("pictureText").innerHTML = "Now Start!";

        var src = document.getElementById("bodybody");
        src.replaceChild(img, src.firstChild);

        document.getElementById("song_list_button").style.display="block";
    }
    else {
        var cf_flag = await get_url();

        if (cf_flag) {
            img.src = "/image/codeforces.jpg";
            txt = "*Click to start listening!*";
        }
        else {
            img.src = "/image/notCodeforces.jpg";
            txt = "No Codeforces, No Music! X(";
        }

        document.getElementById("pictureText").innerHTML = txt;

        var src = document.getElementById("bodybody");
        src.replaceChild(img, src.firstChild);

        document.getElementById("song_list_button").style.display="none";
    }
}

function get_music_list(is_checked) {
    if (is_checked) {
        var xhr = new XMLHttpRequest();
        var lists;

        xhr.open('GET', chrome.extension.getURL("/data/song_list.txt"), true);

        xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200)
                lists = xhr.responseText.split('\n');
        };

        xhr.send();

        if (lists.length) {
            for (var i = 0; i < lists.length; ++i) {
                
            }
        }
        else {

        }
    }
}