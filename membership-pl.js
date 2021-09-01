let channelId = document.querySelector(".ytd-channel-name a")?.getAttribute("href")?.replace(/\/.+\//, "")
	?? document.querySelector(".ytp-title-channel-logo")?.getAttribute("href")?.replace(/https:\/.+\//, "")
	?? document.querySelector("a > .channel-profile")?.parentElement?.getAttribute("href")?.replace(/\/.+\//, "");
if (channelId) {
	window.open(`https://www.youtube.com/playlist?list=UUMO${channelId.substr(2, 22)}`, "_blank");
} else {
	console.error(`Cannot get channel ID on ${location.href}`);
	}