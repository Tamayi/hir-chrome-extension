chrome.action.onClicked.addListener((tab) => {
    console.warn({ "tab": tab })
    if (tab.url.includes('portal.who.int')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: [ "scripts/jquery-3.6.4.slim.min.js", "content.js" ]
        });
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.warn({ "tabId": tabId, "changeInfo": changeInfo, "tab": tab })
    if (tab.url.includes('portal.who.int') && changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: [ "scripts/jquery-3.6.4.slim.min.js", "content.js" ]
        });
    }
});

