function getTextInput(that){
  return {
    allText: $(that).text(),
    selection: window.getSelection().toString()
  };
}

function renderTextOutput(that, textContent, isNewTag){

  // if ( isNewTag ){
  //   that.value = textContext.textBeforeSelection + "~" + 'the id number...' + "{" + selectionText + "}~" + textContext.textAfterSelection;
  //   addPluralTags(that, textContent);

  // };

  // console.log(textOutput);
  // $('#textOutput').html(textOutput);
  // $('.plural').off();
  // $('.plural').on('click', function(){
  //   activatePlural(this)
  // });
}