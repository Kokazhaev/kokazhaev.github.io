function showInfo(option) {
	var bottom = document.getElementById('portfolio__bottom');
	var plus = document.getElementById('portfolio__plus');
	if (option == 'show') {
		bottom.style.display = "block";
		plus.style.display = "block"
	}else {
		bottom.style.display = 'none';
		plus.style.display = 'none'
	}
}

