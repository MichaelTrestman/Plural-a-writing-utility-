$(function(){

  var plurals = [];
  var activePlural = null;
  var keyEncodings = {
    192: 'base',
    220: 'save',
    219: 'prev',
    221: 'next',
    8: 'delete'    
  };
  var keysDown = {
    base: false,
    save: false,
    prev: false,
    next: false
  };
 

  $('#textInput').on('keydown', function(e){

    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];
    if (keysDown.hasOwnProperty(keyDown)) {
      keysDown[keyDown] = true;
      //only runActions if keysDown.base and exactly one other keysDown value are true


      Object.keys(x).map(function(i){ return x[i]});
      var 



      if ( 
        keysDown.base 
          &&
        Object.keys(keysDown)
            .filter(function(x){ return keysDown[x] })
            .length == 2
      ) {
        runActions(keysDown);
      };
    };
    // console.log('keysDown: ');
    // console.log(keysDown);

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

function runActions(keysDown){
  if (!keysDown.base){
    console.log('no action');
    return null;
  } else {
    if (keysDown.save){
      console.log('save!');
      handleCommand.save();
      return;
    }
  }
  console.log('still no action');
  return;
}

handleCommand = {
  save: function(){
    // is there a current selection?
    // is there an active plural?
    // is the text selection identical to an existing variant for the active plural?
  }
}

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
