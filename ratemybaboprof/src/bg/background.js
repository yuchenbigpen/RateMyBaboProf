//inject script on click
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "src/inject/inject.js" });
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { msg: "getprof" }, function(response) {
    if (response !== null) {
      chrome.tabs.create({ url: response, selected: true }, function(tab) {});
    }
  });
});
