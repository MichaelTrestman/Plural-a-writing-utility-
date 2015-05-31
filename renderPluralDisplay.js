function renderPluralDisplay(thisPlural){
  var display = $('#activePluralDisplay');
  display.empty();
  thisPlural.forEach(function(variant){
    display.append("<p>" + variant + "</p>")
  })
}