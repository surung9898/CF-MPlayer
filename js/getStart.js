var img = document.createElement("img");

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
    if (is_checked)
    {       
        img.src = "/image/codeforcesStart.png";

        var src = document.getElementById("isCodeforces");
        var parsrc = src.parentNode;

        parsrc.replaceChild(img, src);
    }
    else
    {
        var cf_flag = await get_url();

        if (cf_flag) {
            img.src = "/image/codeforces.jpg";
        }
        else {
            img.src = "/image/notCodeforces.jpg";
        }
        
        var src = document.getElementById("isCodeforces");
        var parsrc = src.parentNode;

        parsrc.replaceChild(img, src);
    }
}