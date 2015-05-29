var globals = $(function(){

  var plurals = {};
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

  $('span.plural').on('click', function(){
    if ( !$(this).hasClass('active') ){
      $('span.plural.active').each(deactivatePlural);
      activatePlural(this);
    }

  });

  $('#textInput').on('keydown', function(e){

    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];

    //only runActions if keysDown.base and exactly one other keysDown value are true
    if (keysDown.hasOwnProperty(keyDown)) {
      keysDown[keyDown] = true;

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

      var textContent = getTextInput(this);
      renderTextOutput(this, textContent.allText);
  });

  $('#textInput').on('keyup', function(e){
    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];
    keysDown[keyDown] = false;
  });
  return {
    plurals: plurals
  };
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
  $('.plural').off();
  $('.plural').on('click', function(){
    activatePlural(this)
  })
}
