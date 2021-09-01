# Usage
On any YouTube video or channel page, click on the bookmarklet to instantly go to "Member's only" playlist of the video or channel owner.

# Install
1. Copy content of [bookmarklet.js](#file-bookmarklet-js)
2. Create new bookmark  
3. Paste script in URL
4. Give name to bookmark and save


# Debugging and Troubleshooting
If it doesn't work try refreshing page before clicking the bookmarklet.  

F12 to open console to see the problem. Comment below if something breaks.

# How it works
The script grabs the channel ID which is 24 characters long.
Now for every channel, YouTube has kindly generated a playlist for its videos that are limited to member's only.  
If the channel ID is `UCA1234567890B1234567890`, then the playlist would be in `https://www.youtube.com/playlist?list=UUMOA1234567890B1234567890`. 
After the playlist link is generated we just tell the browser to open it in another new tab and we're set.  