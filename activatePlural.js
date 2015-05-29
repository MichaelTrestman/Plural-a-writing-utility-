function activatePlural(thisP){
	thisP = $(thisP);
	$('span.plural.active').removeClass('active');
	thisP.addClass('active');
	
}

function deactivatePlural(){
	$(this).removeClass('active');
}