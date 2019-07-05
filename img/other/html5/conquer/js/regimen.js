<!--/* ========================= initialize ========================= */-->

$(document).ready(function() {
	regInit();
});


<!--/* ========================= FUNCTION - switchReg ========================= */-->

function switchReg(index) {

	/*alert("PING! switchReg triggered!  index = " + index);*/

	$('regContainer').animate({
		opacity: 0
	}, transDuration );

	$('#r' + index).zindex('up');		//pushes to top of stack
	//$('#' + index).zindex('down');	//pushes down the stack

	$('#r' + index).animate({
		opacity: 1
	}, transDuration );

	$('regDescr').scrollTop(0);
}


<!--/* ========================= FUNCTION - handle z-indexes ========================= */-->

//Thanks to lonesomeday at stackoverflow http://stackoverflow.com/a/8568191/250241

var highest = 1;

var publicMethods = {
	up : function() {
		this.css('z-index', ++highest); // increase highest by 1 and set the style
		return this;
	},

	down : function() {
		this.css('z-index', --highest); // increase highest by 1 and set the style
		return this;
	}
}

$.fn.zindex = function(method) {
	if (publicMethods[method]) {
		return publicMethods[method].apply(this);
	}else{
		$.error( 'Method ' +  method + ' does not exist. Yo.' );
	}
}


<!--/* ========================= FUNCTION - regInit ========================= */-->

var transDuration = 250;

function regInit() {


<!--/* ------------------------- NAVIGATION (PRODUCTS) - regNavContainer ------------------------- */-->
/*
	$('regNavContainer[id$="rn2"]').zindex('up');		//pushes to top of stack
	$('regNavContainer[id$="rn1"]').zindex('up');		//pushes to top of stack
	$('regNavContainer[id$="rn0"]').zindex('up');		//pushes to top of stack


	$('regNavContainer').find('h1').each(function(index) {

		alert("index = " + index);
	
		$(this).parent(this).animate({
			opacity: .625
		}, transDuration );
	
		$(this).mouseover(function() {
			$(this).parent(this).animate({
				opacity: 1
			}, transDuration );
		});
	
		$(this).mouseout(function() {
			$(this).parent(this).animate({
				opacity: .625
			}, transDuration );
		});
	
		$(this).parent(this).click(function() {
			switchReg(index);
		});
	});
*/	

	$('hotspot').each(function(index) {

		/*alert("index = " + index);*/
	
		$('regNavContainer').animate({
			opacity: .625
		}, transDuration );
	
		$(this).mouseover(function() {
			$('regNavContainer[id$="rn' + index + '"]').animate({
				opacity: 1
			}, transDuration );
		});
	
		$(this).mouseout(function() {
			$('regNavContainer[id$="rn' + index + '"]').animate({
				opacity: .625
			}, transDuration );
		});
	
		$(this).click(function() {
			switchReg(index);
		});
	});


<!--/* ------------------------- ACTIVATE FIRST REGIMEN ------------------------- */-->

	$('regContainer[id$="0"]').zindex('up');		//pushes to top of stack

	$('regContainer[id$="0"]').animate({
		opacity: 1
	}, transDuration );

}