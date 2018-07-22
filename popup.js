$(function() {
  $('#submitAmount').click(function() {
    console.log('submitAmount click');
    chrome.storage.sync.set({
      'previousCardIdx': -1
    });
  });
});
