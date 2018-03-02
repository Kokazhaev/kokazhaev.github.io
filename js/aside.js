function toggleAside(option) {
	var aside = document.getElementById('aside');
	var navAside = document.getElementById('nav__aside')
	if (option == 'show') {
		aside.style.display = 'block';
		
		setTimeout(function() {
			navAside.style.left = '0'
		}, 200)
	}else {
		navAside.style.left = '-300px';
		setTimeout(function() {
			aside.style.display = 'none'
		}, 200)
	}
}