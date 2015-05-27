$(function(){

  var plurals = [];

  $('#textInput').on('keydown', function(e){
    if (e.keyCode === 192) {
      e.preventDefault();
      var textContent = getTextInput(this);
      renderTextOutput(this, textContent);
    }
  });

  function getTextInput(that){
      
    var selectionText = that.value.substr(that.selectionStart, (that.selectionEnd - that.selectionStart) );
    console.log(selectionText);
    var textBeforeSelection = that.value.substr(0, that.selectionStart);
    var textAfterSelection = that.value.substr(that.selectionEnd, that.value.length);
    that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;
    return that.value;
  }

  function renderTextOutput(that, textContent){
    textContent = textContent.replace(/~\{/g, '<span class="plural">');
    textContent = textContent.replace(/\}~/g, '</span>');
    console.log(textContent);
    $('#textOutput').html(textContent);

  }



})