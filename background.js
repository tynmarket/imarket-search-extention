chrome.contextMenus.create({
  title: "iMarketで「%s」を検索する",
  type : "normal",
  contexts: ["all"],
  onclick: (info) => {
    const url = `https://tyn-imarket.com/stocks/search?query=${info.selectionText}`;
    chrome.tabs.create({ url : url });
  }
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  const url = 'https://tyn-imarket.com/';
  chrome.tabs.create({ url: url });
});
