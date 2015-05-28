$(function(){
  var plurals = [];
  var activePlural = null;

  $('#textInput').on('keydown', function(e){

    // ok so this really needs to check for a combo of keypresses. we're going to do "`" as the base key, "{" and "}" as switch up and down through the variants of the current plural, "\" as save new variant, and "delete" as delete active variant;
    if (e.keyCode === 192) {
      e.preventDefault();
      var textContent = getTextInput(this);
      // console.log(selection);
      renderTextOutput(this, textContent.allText);
    }
  });
})

function getTextInput(that){
  var selectionText = that.value.substr(that.selectionStart, (that.selectionEnd - that.selectionStart) );
  console.log(selectionText);
  var textBeforeSelection = that.value.substr(0, that.selectionStart);
  var textAfterSelection = that.value.substr(that.selectionEnd, that.value.length);
  that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;
  return {
    allText: that.value,
    selection: selectionText
  };
}

function renderTextOutput(that, textContent){
  textContent = textContent.replace(/~\{/g, '<span class="plural">');
  textContent = textContent.replace(/\}~/g, '</span>');
  console.log(textContent);
  $('#textOutput').html(textContent);

}
