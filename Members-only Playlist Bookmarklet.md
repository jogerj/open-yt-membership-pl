# Usage
On any YouTube video or channel page, click on the bookmarklet to instantly go to "Member's only" playlist of the video or channel owner.

# Install
1. Copy content of [membership-pl.min.js](#file-membership-pl-min-js)
2. Create new bookmark  
    For Chrome: Right click bookmark bar and "Add page..."
4. Paste script in URL
5. Give name to bookmark and save


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