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
    alert("wow!");
}