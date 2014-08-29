// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse(settings.toObject());
//   });

function loadFightText(){
chrome.browserAction.setBadgeText({text:'Fighting the power'})
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] })
}
function eraseFightText(){
chrome.browserAction.setBadgeText({text:''})	
}



setInterval(function(){loadFightText()},3000);
//setInterval(function(){eraseFightText()},5000);
