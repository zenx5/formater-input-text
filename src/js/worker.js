// silent is golden
chrome.runtime.onInstalled.addListener( async function(){
    
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log('resend')
    chrome.tabs.sendMessage( sender.tab.id, message )
})
