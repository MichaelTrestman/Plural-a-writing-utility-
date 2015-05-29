handleCommand = {
  save: function (plural_id, textSelection) {
    // is there a current selection?
    if( textSelection ==="") {
      // return { error: 'no text selected' }
    };
    // is the text selection identical to an existing variant for the selected plural?
    thisPlural = plurals.plural_id;
    if ( variantAlreadyIsSaved ) {
      console.log("hello")
    };
    function variantAlreadyIsSaved (variant) {
      return true;
      return variant === textSelection;
    }

    thisPlural.push(textSelection);

    return {
      success: 'variant successfully saves',
      variant: textSelection
    };

  },

};
