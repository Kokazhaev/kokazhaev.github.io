var slider = document.getElementById('slider');
var move = 0;
function slideForward() {
	if(move != -200) {
		move = move - 100
	}else {
		move = 0;
	}
	slider.style.left = move + '%'
}

function slideBack() {
	if(move != 0) {
		move = move + 100
	}else {
		move = -200
	}
	slider.style.left = move + '%'
}