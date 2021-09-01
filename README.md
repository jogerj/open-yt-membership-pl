# Usage
On any YouTube video or channel page, click on the bookmarklet to instantly go to "Member's only" playlist of the video or channel owner.

# Install
1. Copy content of [membership-pl.min.js](https://github.com/jogerj/open-yt-membership-pl/blob/master/membership-pl.js)
2. Create new bookmark  
    For Chrome: Right click bookmark bar and "Add page..."
3. Paste script in URL
4. Give name to bookmark and save

**TL;DR copy and bookmark this:**

```javascript
javascript:(async function(){const a=await async function(){const a=["https://www.youtube.com/channel/","http://www.youtube.com/channel/"],b=[location.href];for(const d of b)for(const b of a)if(d%26%26d.startsWith(b))return d.split(/[%3F%23]/)[0].substr(b.length);const c=await fetch(location.href),d=new DOMParser().parseFromString((await c.text()),"text/html");try{return d.querySelector("meta[itemprop='channelId']").getAttribute("content")}catch(a){}}();if(a)window.open(`https://www.youtube.com/playlist%3Flist=UUMO${a.substr(2,22)}`,"_blank");else{console.log(`[MEMBERSHIP PLAYLIST REDIRECT] Cannot get channel ID on ${location.href}`);var b=function(){if(window.hasOwnProperty("ytInitialPlayerResponse")%26%26null!=window.ytInitialPlayerResponse%26%26window.ytInitialPlayerResponse.hasOwnProperty("videoDetails")%26%26window.ytInitialPlayerResponse.videoDetails.hasOwnProperty("channelId"))return console.log("Found channel in ytInitialPlayerResponse"),window.ytInitialPlayerResponse.videoDetails.channelId;var a;return Array.prototype.slice.call(document.getElementsByTagName("link")).forEach(function(b){"canonical"===b.getAttribute("rel")%26%26(console.log("Found channel link"),a=b.getAttribute("href").substr(32))}),a}();b===void 0%3Fconsole.warn("Could not find a channel ID at ${location.href}"):(console.log("Going to membership playlist URL"),window.open("https://www.youtube.com/playlist%3Flist=UUMO"+b.substring(a.length-22),"_blank"))}})();
```


# Debugging and Troubleshooting
If it doesn't work try refreshing page before clicking the bookmarklet.  

F12 to open console to see the problem. Comment below if something breaks.

# How it works
The script grabs the channel ID which is 24 characters long and starts with UC.  
Now for every channel, YouTube has kindly generated a playlist for its videos that are limited to member's only.  
Let uniqueID be the channel ID without `UC`  
The formula is basically `https://www.youtube.com/playlist?list=UUMO<uniqueID>`  
After the playlist link is generated we just tell the browser to open it in another new tab and we're set.  

# Special thanks
Thanks to [lekoOwO](https://gist.github.com/lekoOwO/622a7aab272c18a354fb7b0759f938fb) for more reliable method at fetching channel ID
