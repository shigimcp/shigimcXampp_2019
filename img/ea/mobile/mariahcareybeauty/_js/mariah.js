function popUp(url) {
	newwindow=window.open(url,'popUpWindow','height=590,width=836,resizable=yes,scrollbars=yes,toolbar=no,location=yes,directories=no,status=yes');
	if (window.focus) {newwindow.focus()}
	return false;
}