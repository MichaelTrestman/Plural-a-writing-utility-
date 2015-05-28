$(function(){
  var plurals = [];
  var activePlural = null;
  var keysDown = {
    base: false,
    save: false,
    prev: false,
    next: false
  };
  var keyEncodings = {
    192: 'base',
    220: 'save',
    219: 'prev',
    221: 'next',
    8: 'delete'    
  };

  $('#textInput').on('keydown', function(e){

    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];
    keysDown[keyDown] = true;

    console.log('keysDown: ');
    console.log(keysDown);

    // if (e.keyCode === 192) {
    //   e.preventDefault();
    //   var textContent = getTextInput(this);
    //   // console.log(selection);
    //   renderTextOutput(this, textContent.allText);
    // }
  });

  $('#textInput').on('keyup', function(e){
    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];
    keysDown[keyDown] = false;
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
