var url = window.location.href;

if (url == "https://codeforces.com/") {
    var pathname = window.location.pathname;
    var pathnameSlice = pathname.split('/')
    
    if (pathnameSlice[1] == 'contest') {
        var status = document.getElementsByClassName("contest-state-phase")[0].innerHTML;

        if (status == "Contest is running") {
            //TODO
        }
    }
}