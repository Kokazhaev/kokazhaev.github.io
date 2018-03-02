var modal = document.getElementById('modal');
function toggleModal(option) {
	if (option == 'show') {
		modal.style.display = 'flex'
	}else {
		modal.style.display = 'none'
	}
}

var modalg = document.getElementById('modal__buyg');
var modalr = document.getElementById('modal__buyr');
var modalp = document.getElementById('modal__buyp');
function toggleBuyModal(option) {
	if (option == '125') {
		modalg.style.display = 'flex'
	}else if (option == '195') {
		modalr.style.display = 'flex'
	}else if (option == '145') {
		modalp.style.display = 'flex'
	}
	else {
		modalg.style.display = 'none';
		modalp.style.display = 'none';
		modalr.style.display = 'none';
	}
}