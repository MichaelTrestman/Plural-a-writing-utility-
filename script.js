var globals = {};

$(function(){
  globals.plurals = {};
  globals.plural_id_iterator = 0;
  globals.activePlural_id = null;

//this is a mess clean it up!

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

    if (e.keyCode === 192 || keysDown.base){
      e.preventDefault()
    };

    var keyDown = keyEncodings[e.keyCode];

    //only runActions if keysDown.base and exactly one other keysDown value are true

    var textContent = getTextInput(this);
    var feedback = {};

    if (keysDown.hasOwnProperty(keyDown)) {
      keysDown[keyDown] = true;

      if (
        keysDown.base
          &&
        Object.keys(keysDown)
            .filter(function(x){ return keysDown[x] })
            .length == 2
      ){
        feedback = runActions(keysDown, globals.activePlural_id, textContent);
      };
    };
    renderTextOutput(this, textContent, !!feedback.isNewTag);
  });

  $('#textInput').on('keyup', function(e){
    var keyCodeStr = e.keyCode;
    keyDown = keyEncodings[keyCodeStr];
    keysDown[keyDown] = false;
  });

})

function attachClickHandlerToAllPlurals(){
  $('span.plural').off();
  $('span.plural').on('click', function(){
    if ( !$(this).hasClass('active') ){
      $('span.plural.active').each(deactivatePlural);
      activatePlural(this);
    };
  });
}




function addPluralTags (that, textContent) {

  that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;
  var textOutput = textContent.allText.replace(/~(\d+)\{/g, function(id){
    '<span class="plural id_' + id.toString() + '">'
  });
  textOutput = textOutput.replace(/\}~/g, '</span>');
}
