function createPlural(plural_id, textContent){
  var textBox = $('#textBox')[0];
  var openingTag = '<span class="plural '+ plural_id.toString() +'">';
  var taggedSelection = openingTag + textContent.selection + '</span>'
  textBox.innerHTML = textBox.innerHTML.replace(textContent.selection, taggedSelection)

  var thisNewPluralSpan = $('.' + plural_id.toString());

  return {success: true}
}

