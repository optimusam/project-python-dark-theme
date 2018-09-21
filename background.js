chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set(
        {
            darkcolor: '#2f2222e3',
            fontcolor: '#FFFFFF',
        }
    , function () {
        console.log("The color is dark");
    });
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'projectpython.net' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});