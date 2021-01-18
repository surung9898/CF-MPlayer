document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');

    link.addEventListener('click', function() {
        get_start(link.checked);
        get_music_list(link.checked);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var songlist = document.getElementById('song_list_button');

    songlist.addEventListener('click', function() {
        set_music_list();
    });
});