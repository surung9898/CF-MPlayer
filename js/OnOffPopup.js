document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');

    link.addEventListener('click', function() {
        get_start(link.checked);
    });
});