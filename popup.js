
$(function() {

  chrome.storage.sync.get('total', function(result){
    $('#spend').text(result.total);
  });

  $('#submitAmount').click(function(){
    console.log('submitAmount click');

    chrome.storage.sync.get('total', function(budget) {
      var newTotal = 0;
      if (budget.total) {
        newTotal += parseInt(budget.total);
      }
      console.log('newTotal ' + newTotal);

      var amount = $('#amount').val();
      if (amount) {
        newTotal += parseInt(amount);
      }
      console.log('newTotal ' + newTotal);

      chrome.storage.sync.set({
        'total': newTotal
      });
      $('#spend').text(newTotal);
      $('#amount').val("");
    });

  });
});
