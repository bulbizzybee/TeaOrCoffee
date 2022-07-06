let coin = document.getElementById('coin');

coin.addEventListener('click', fnClick);

function fnClick() {
	var flipResult = Math.random();
	if (flipResult < 0.5) {
		coin.className = 'flipHead';
	} else {
		coin.className = 'flipTail';
	}
}
