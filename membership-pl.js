javascript:(function () {
    var channelId = function () {
        var id;
        Array.prototype.slice.call(document.getElementsByTagName('link')).forEach(function (element) {
            if (element.getAttribute('rel') === 'canonical') {
                console.log('Found channel link');
                id = element.getAttribute('href').substr(32);
            }
        });
        return id;
        
        if (
            window.hasOwnProperty('ytInitialPlayerResponse') &&
            window['ytInitialPlayerResponse'] != null &&
            window['ytInitialPlayerResponse'].hasOwnProperty('videoDetails') &&
            window['ytInitialPlayerResponse']['videoDetails'].hasOwnProperty('channelId')
        ) {
            console.log('Found channel in ytInitialPlayerResponse');
            return window['ytInitialPlayerResponse']['videoDetails']['channelId'];
        }

        
    }();
    if (channelId === undefined) {
        console.log('Could not find a channel ID at ' + location.href);
    } else {
        console.log('Going to membership playlist URL');
        location.href = 'https://www.youtube.com/playlist?list=UUMO' + channelId.substring(channelId.length-22);
    }
})();

