<!--/* ========================= initialize ========================= */-->

$(document).ready(function() {
	prodInit();
});


<!--/* ========================= FUNCTION - resetSect ========================= */-->

function resetSect() {
	$('prodContainer img, focusContainer, hedContainer, description, benefits, ingredients, .buy, plusOneContainer').animate({
		opacity: 0
	}, transDuration );

	$('description, benefits, ingredients').scrollTop(0);
}


<!--/* ========================= FUNCTION - switchProd ========================= */-->

function switchProd(index) {

	resetSect();


	$('#' + index).zindex('up');		//pushes to top of stack

	$('#' + index).animate({
		opacity: 1
	}, transDuration );


	$('#f' + index).zindex('up');		//pushes to top of stack

	$('#f' + index).animate({
		opacity: 1
	}, transDuration );


	$('#hd' + index).zindex('up');		//pushes to top of stack

	$('#hd' + index).animate({
		opacity: 1
	}, transDuration );


	$('#d' + index).zindex('up');		//pushes to top of stack

	$('#d' + index).animate({
		opacity: 1
	}, transDuration );


	$('#bn' + index).animate({
		opacity: 1
	}, transDuration );

	$('#bn' + index).zindex('up');		//pushes to top of stack


	$('#plus' + index).animate({
		opacity: 1
	}, transDuration );

	$('#plus' + index).zindex('up');		//pushes to top of stack

//	var thisSect = 'f' + index;
//	var thisInfo = 'prDescr';
//	var thisBuy = 'bn' + index;
//	var thisPlus = 'plus' + index;
//	alert('index = ' + index + '   thisSect = ' + thisSect + '   thisInfo = ' + thisInfo + '   thisBuy = ' + thisBuy + '   thisPlus = ' + thisPlus);
}


<!--/* ========================= FUNCTION - resetInfo ========================= */-->

function resetInfo() {
	$('description, benefits, ingredients').animate({
		opacity: 0
	}, transDuration );

	$('description, benefits, ingredients').scrollTop(0);
}


<!--/* ========================= FUNCTION - switchInfo ========================= */-->

function switchInfo(thisSect, thisInfo) {

	resetInfo();

	switch(thisInfo) {
		case 'prDescr':
//			alert('you clicked ' + thisInfo + ' in ' + thisSect);

			$('#' + thisSect).find('description').css('z-index', ++highest);		//pushes to top of stack

			$('#' + thisSect).find('description').animate({
				opacity: 1
			}, transDuration );
		break;

		case 'prBen':
//			alert('you clicked ' + thisInfo + ' in ' + thisSect);

			$('#' + thisSect).find('benefits').css('z-index', ++highest);		//pushes to top of stack

			$('#' + thisSect).find('benefits').animate({
				opacity: 1
			}, transDuration );
		break;

		case 'prIngr':
//			alert('you clicked ' + thisInfo + ' in ' + thisSect);

			$('#' + thisSect).find('ingredients').css('z-index', ++highest);		//pushes to top of stack

			$('#' + thisSect).find('ingredients').animate({
				opacity: 1
			}, transDuration );
		break;

		default:
		// code to be executed if n is different from case 1 and 2
	}
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


<!--/* ========================= FUNCTION - prodInit ========================= */-->


var transDuration = 250;

function prodInit() {


<!--/* ------------------------- NAVIGATION (PRODUCTS) - prodNavContainer ------------------------- */-->

	$("prodNavContainer").find("img").each(function(index) {

		/*alert("index = " + index);*/
	
		$(this).animate({
			opacity: .5
		}, transDuration );
	
		$(this).mouseover(function() {
			$(this).animate({
				opacity: 1
			}, transDuration );
		});
	
		$(this).mouseout(function() {
			$(this).animate({
				opacity: .5
			}, transDuration );
		});
	
		$(this).click(function() {
			switchProd(index);
		});
	
	});


<!--/* ------------------------- NAVIGATION (INFO) - hedContainer ------------------------- */-->

	$("hedContainer").find("a").each(function(index) {

		var thisSect = $(this).parent(this).parent(this).attr('id');
		var thisInfo = $(this).attr('id');
	
//		alert('index = ' + index + '     thisSect = ' + thisSect + '     thisInfo = ' + thisInfo);

//		$(this).animate({
//			borderBottomColor: '#FFFFFF'
//		}, transDuration );
	
//		$(this).mouseover(function() {
//			$(this).animate({
//				borderBottomColor: '#90805D'
//			}, transDuration );
//		});
//	
//		$(this).mouseout(function() {
//			$(this).animate({
//				borderBottomColor: '#FFFFFF'
//			}, transDuration );
//		});
	
		$(this).click(this, function() {
			switchInfo(thisSect, thisInfo);
		});
	
	});


<!--/* ------------------------- ACTIVATE FIRST PRODUCT ------------------------- */-->

	$('#0').zindex('up');		//pushes to top of stack

	$('#0').animate({
		opacity: 1
	}, transDuration );


	$('#f0').zindex('up');		//pushes to top of stack

	$('focusContainer[id$="f0"]').animate({
		opacity: 1
	}, transDuration );


	$('#hd0').zindex('up');		//pushes to top of stack

	$('hedContainer[id$="hd0"]').animate({
		opacity: 1
	}, transDuration );


	$('#d0').zindex('up');		//pushes to top of stack

	$('description[id$="d0"]').animate({
		opacity: 1
	}, transDuration );


	$('#bn0').zindex('up');		//pushes to top of stack

	$('#bn0').animate({
		opacity: 1
	}, transDuration );


	$('#plus0').zindex('up');		//pushes to top of stack

	$('#plus0').animate({
		opacity: 1
	}, transDuration );


<!--/* ========================= WORKS BEST WITH... ========================= */-->

	$('plusOneContainer').find('a').each(function(index) {

		var thisIdex = $(this).attr('id');
//		alert("index = " + index + "     thisIdex = " + thisIdex);
	
//		$(this).animate({
//			opacity: .5
//		}, transDuration );
//	
//		$(this).mouseover(function() {
//			$(this).animate({
//				opacity: 1
//			}, transDuration );
//		});
//	
//		$(this).mouseout(function() {
//			$(this).animate({
//				opacity: .5
//			}, transDuration );
//		});
//	
//		$(this).click(function() {
//			switchProd(index);
//		});
//	
	
		$(this).click(function() {
			switchProd(thisIdex);
		});
	});
	
}