$(document).ready(function() {
  $('#question').hide();
  $('#answer').hide();
  $('#form').hide();
  $('#ok').hide();
  $('#wrong').hide();

  $("#start").click(function() {
    var verbs = words[_.random(0, words.length)];
    console.log(verbs);
    $('#question').html(verbs[0]);
    $('#answer').html(verbs[1]);
    $('#question').show();
    $('#answer').hide();
    $('#form').show();
    $('#input').focus();
    $('#start').hide();
    $('#ok').hide();
  });

  $('#submit').click(function(event) {
    event.preventDefault();
    var input = $('#input').val();
    if(input.toLowerCase() == $('#answer').text()) {
      $('#answer').show();
      $('#ok').show();
      $('#start').show();
      $('#form').hide();
      $('#input').val('');
      $('#wrong').hide();
    } else {
      $('#wrong').show();
    }
  });
});
