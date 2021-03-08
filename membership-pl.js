javascript:(async function () {
    const channelId = await async function () {
        const channelUrlLead = ["https://www.youtube.com/channel/", "http://www.youtube.com/channel/"];
        const targets = [location.href];
        for(const t of targets){
            for(const c of channelUrlLead){
                if (t && t.startsWith(c)){
                    return t.split(/[?#]/)[0].substr(c.length);
                }
            }
        };
        const resp = await fetch(location.href);
        const doc = new DOMParser().parseFromString(await resp.text(), "text/html");
        try {
            return doc.querySelector("meta[itemprop='channelId']").getAttribute("content");
        } catch (_) {};
    }();
    if (channelId) {
        window.open(`https://www.youtube.com/playlist?list=UUMO${channelId.substr(2, 22)}`, "_blank");
    } else {
        console.log(`[MEMBERSHIP PLAYLIST REDIRECT] Cannot get channel ID on ${location.href}`);
        // fallback
        var chanId = function () {
        if (
            window.hasOwnProperty('ytInitialPlayerResponse') &&
            window['ytInitialPlayerResponse'] != null &&
            window['ytInitialPlayerResponse'].hasOwnProperty('videoDetails') &&
            window['ytInitialPlayerResponse']['videoDetails'].hasOwnProperty('channelId')
        ) {
            console.log('Found channel in ytInitialPlayerResponse');
            return window['ytInitialPlayerResponse']['videoDetails']['channelId'];
        }
        // second fallback
        var id;
        Array.prototype.slice.call(document.getElementsByTagName('link')).forEach(function (element) {
            if (element.getAttribute('rel') === 'canonical') {
                console.log('Found channel link');
                id = element.getAttribute('href').substr(32);
            }
        });
        return id;
        }();
        if (chanId === undefined) {
            console.warn('Could not find a channel ID at ${location.href}');
        } else {
            console.log('Going to membership playlist URL');
            window.open('https://www.youtube.com/playlist?list=UUMO' + chanId.substring(channelId.length-22), '_blank');
        }
    }
})();