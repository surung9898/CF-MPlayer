function get_music_list(is_checked) {
    if (is_checked) {
        var xhr = new XMLHttpRequest();
        var lists;

        xhr.open('GET', chrome.extension.getURL("/data/song_list.txt"), true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                lists = xhr.responseText.split('\n');

                if (lists.length) {
                    for (var i = 0; i < lists.length; ++i) {
                        //alert(lists[0]);
                    }
                }
            }
        };
    }
}

function set_music_list() {
    tbl = document.getElementById("song_table");

    var tr = tbl.insertRow();
    var txt;

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