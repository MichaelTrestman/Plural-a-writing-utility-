var globals = {};

$(function(){

  globals.plurals = {};
  globals.plural_id_iterator = 0;
  globals.activePlural_id = null;

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

  $('#textBox').on('keydown', function(e){

    if (e.keyCode === 192 || keysDown.base){
      e.preventDefault()
    };

    var keyDown = keyEncodings[e.keyCode];
    var textContent = getTextInput(this);
    // console.log('textContent.allText: ')
    // console.log(textContent.allText)
    // console.log('textContent.selection: ')
    // console.log(textContent.selection)

    var feedback = {};

    //only runActions if keysDown.base and exactly one other keysDown value are true

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
    // renderTextOutput(this, textContent, !!feedback.isNewTag);
  });

  $('#textBox').on('keyup', function(e){
    var keyCodeStr = e.keyCode;
    var keyDown = keyEncodings[keyCodeStr];
    keysDown[keyDown] = false;
  });

})


$('body').on('click', '.plural', function(e){
  var thisPluralSpan = e.currentTarget;
  console.log('yo yo yo this plural got clicked')

    if ( !$(thisPluralSpan).hasClass('active') ){

      $('span.plural.active').each(deactivatePlural);
      activatePlural(thisPluralSpan);

    };
})

// $('body').on('keydown', '.plural', function(e){
//   var thisPluralSpan = e.currentTarget;
//   console.log('yo yo yo this plural got clicked')

//     if ( !$(thisPluralSpan).hasClass('active') ){

//       $('span.plural.active').each(deactivatePlural);
//       activatePlural(thisPluralSpan);

//     };
// })



// function addPluralTags (that, textContent) {

//   that.value = textBeforeSelection + "~{" + selectionText + "}~" + textAfterSelection;
//   var textOutput = textContent.allText.replace(/~(\d+)\{/g, function(id){
//     '<span class="plural id_' + id.toString() + '">'
//   });
//   textOutput = textOutput.replace(/\}~/g, '</span>');
// }
