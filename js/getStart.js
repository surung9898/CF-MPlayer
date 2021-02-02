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

        var tbl = document.createElement('table');
        tbl.setAttribute("id", "song_table");

        tbl.style.width = '200px';
        tbl.style.border = '1px solid black';

        for (var i = 0; i < 5; ++i) {
            var tr = tbl.insertRow();

            for (var j = 0; j < 2; ++j) {
                var td = tr.insertCell();

                td.style.border = '1px solid black';
                td.style.height = '32px';
                td.style.fontSize = '20px';

                if (j == 0) {
                    txt = "song name";
                    td.style.width = '120px'
                }
                else {
                    txt = '🤔';
                    td.style.width = '20px';
                }

                td.appendChild(document. createTextNode(txt));
            }
        }
        
        var src = document.getElementById("bodybody");
        src.replaceChild(tbl, src.firstChild);

        document.getElementById("pictureText").innerHTML = "Now Start!";
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