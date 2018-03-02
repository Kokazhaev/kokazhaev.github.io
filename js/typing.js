var title = document.getElementById('main__title');
var word = ['We design things with love and passion', 'Fixed price project', 'Reseive on time', 'Satisfaction guranteed'];
var i = 0;
var j = 0;

function inputText() {
	var str = '';
	var interval = setInterval(function() {
		if(str.length == word[i].length) {
			clearInterval(interval);
			setTimeout(function() {
				eraseText();
			}, 1000)
			
		}else {
			str = str + word[i][j];
			title.innerHTML = str + '|';
			j++;
		}
	}, 80);
}

function eraseText() {
	var str = word[i];
	var interval = setInterval(function() {
		if(str.length == 0) {
			if(i == word.length-1) {
				i = 0;
			}else {
				i++;
			}
			j = 0;
			clearInterval (interval);
			inputText();
		}else {
			str = str.substring(0, str.length-1);
			title.innerHTML = str + '|';
		}
		
	}, 20)
}

inputText();