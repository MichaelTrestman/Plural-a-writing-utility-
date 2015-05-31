handleCommand = {

  save: function (plural_id, textContent) {

    var textSelection = textContent.selection;
    // is there a current selection?
    if( textSelection ==="") {
      return { error: 'no text selected' }
    };

    var thisPlural = globals.plurals.plural_id;

    // is the text selection identical to an existing variant for the selected plural?
    if ( thisPlural && variantAlreadyIsSaved(thisPlural, textSelection) ) {
      return {error: 'variant already is saved'}
    };

    //is there an active plural? if not, create one!

    if (thisPlural===undefined){
      console.log('no active plural')
      plural_id = globals.plural_id_iterator;
      if (createPlural(plural_id, textContent).success ) globals.plural_id_iterator += 1;
      // globals.plural_id_iterator += 1;
      // globals.plurals.plural_id = [];
      // thisPlural = globals.plurals.plural_id;
      // console.log('thisPlural: ')
      // console.log(globals.plurals.plural_id);

    } else {
      console.log('active plural: ' + thisPlural);
    }

    // thisPlural.push(textSelection);
    // renderPluralDisplay(thisPlural);
    return {
      success: 'variant successfully saved',
      variant: textSelection
    };
  }
};

function variantAlreadyIsSaved (thisPlural, textSelection) {
  return thisPlural.some(function(variant){
    return (variant === textSelection);
  });
}

