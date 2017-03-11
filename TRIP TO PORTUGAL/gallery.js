$(document).ready(function(){

	var slideshow = $('.screen');
	var imgNumber = slideshow.attr('numberOfImages');

	var growContainer = $('.growContainer');
	var amountOfMovement = slideshow.width();

	var buttonLeft = $('.buttl');
	var buttonRight = $('.buttr');

	var sizeGrowContainer = amountOfMovement * imgNumber;
	growContainer.css({
		'width' : sizeGrowContainer
	});

	var page = 1;
	if(page == 1)
		buttonLeft.css({'opacity': 0, 'cursor': 'auto'});
	if(page == imgNumber)
			buttonRight.css({'opacity': 0, 'cursor': 'auto'});
	buttonLeft.click(function() {
		if(growContainer.position().left < 0){
			page--;
			growContainer.animate({
				'left': '+=' + amountOfMovement +'px'
			}, 300)
			if(page == 1)
		buttonLeft.css({'opacity': 0, 'cursor': 'auto'});
		else
			{
				buttonRight.css({'opacity': 1, 'cursor': 'pointer'});
				buttonLeft.css({'opacity': 1, 'cursor': 'pointer'});
			}
	}
			
	});

	buttonRight.click(function() {
		
		if( growContainer.position().left > -(sizeGrowContainer - amountOfMovement) ){
			page++;
			growContainer.animate({
				'left': '-=' + amountOfMovement +'px'
			}, 300)
	if(page == imgNumber)
			buttonRight.css({'opacity': 0, 'cursor': 'auto'});
		else
			{
				buttonRight.css({'opacity': 1, 'cursor': 'pointer'});
				buttonLeft.css({'opacity': 1, 'cursor': 'pointer'});
			}
		}
	
	});
	
});

