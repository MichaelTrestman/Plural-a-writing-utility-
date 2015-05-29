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
    if (e.keyCode === 192 || keysDown.base) e.preventDefault();
    
    var keyDown = keyEncodings[e.keyCode];

    //only runActions if keysDown.base and exactly one other keysDown value are true
    
    var textContent = getTextInput(this);

    if (keysDown.hasOwnProperty(keyDown)) {
      keysDown[keyDown] = true;

      if (
        keysDown.base
          &&
        Object.keys(keysDown)
            .filter(function(x){ return keysDown[x] })
            .length == 2
      ){
        runActions(keysDown, globals.activePlural_id, textContent);
      };

    };
      
    renderTextOutput(this, textContent.allText);
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
  
function getTextInput(that){

  var selectionText = that.value.substr(that.selectionStart, (that.selectionEnd - that.selectionStart) );
  console.log(selectionText);
  var textBeforeSelection = that.value.substr(0, that.selectionStart);
  var textAfterSelection = that.value.substr(that.selectionEnd, that.value.length);
  //this is actually part of the creation of a new plural
  // that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;
  
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
