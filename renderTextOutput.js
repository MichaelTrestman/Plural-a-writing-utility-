function getTextInput(that){

  var selectionText = that.value.substr(that.selectionStart, (that.selectionEnd - that.selectionStart) );
  console.log(selectionText);
  var textBeforeSelection = that.value.substr(0, that.selectionStart);
  var textAfterSelection = that.value.substr(that.selectionEnd, that.value.length);
  //this is actually part of the creation of a new plural
  // that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;

  return {
    allText: that.value,
    selection: selectionText,
    textBeforeSelection: textBeforeSelection,
    textAfterSelection: textAfterSelection
  };
}

function renderTextOutput(that, textContent, isNewTag){

  if ( isNewTag ){
    that.value = textContext.textBeforeSelection + "~" + 'the id number...' + "{" + selectionText + "}~" + textContext.textAfterSelection;
    addPluralTags(that, textContent);

  };

  console.log(textOutput);
  $('#textOutput').html(textOutput);
  $('.plural').off();
  $('.plural').on('click', function(){
    activatePlural(this)
  });
}