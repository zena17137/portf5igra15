let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < 10; i++) {
	arr15.sort(() => Math.random() - 0.5);
}

function drawSquare(x, y, val) {
	ctx.fillStyle = 'black';
	ctx.fillRect(x, y, 100, 100);

	ctx.fillStyle = val === 0 ? 'white' : 'yellow';
	ctx.fillRect(x + 5, y + 5, 90, 90);

	ctx.fillStyle = 'black';
	ctx.font = '60px Arial';
	ctx.fillText(val, x + (val < 10 ? 35 : 15), y + 70);
}

//drawSquare(100, 200, 0);
//drawSquare(0, 0, 7);
//drawSquare(100, 100, 11);

function drawTag(pos, val) {
	switch (pos) {
		case 0:
			drawSquare(0, 0, val);
			break;
		case 1:
			drawSquare(100, 0, val);
			break;
		case 2:
			drawSquare(200, 0, val);
			break;
		case 3:
			drawSquare(300, 0, val);
			break;
		case 4:
			drawSquare(0, 100, val);
			break;
		case 5:
			drawSquare(100, 100, val);
			break;
		case 6:
			drawSquare(200, 100, val);
			break;
		case 7:
			drawSquare(300, 100, val);
			break;
		case 8:
			drawSquare(0, 200, val);
			break;
		case 9:
			drawSquare(100, 200, val);
			break;
		case 10:
			drawSquare(200, 200, val);
			break;
		case 11:
			drawSquare(300, 200, val);
			break;
		case 12:
			drawSquare(0, 300, val);
			break;
		case 13:
			drawSquare(100, 300, val);
			break;
		case 14:
			drawSquare(200, 300, val);
			break;
		case 15:
			drawSquare(300, 300, val);
			break;
	}
}

for (let i = 0; i < 16; i++) {
	drawTag(i, arr15[i]);
}

let checkPlace = function (evX) {
	if (evX < 110) {
		return 1;
	}

	if (evX < 210) {
		return 2;
	}

	if (evX < 310) {
		return 3;
	}

	if (evX < 410) {
		return 4;
	}
};

let clickPos;

addEventListener('mousemove', function (e) {
	console.log(e.clientX, e.clientY);
})

canvas.addEventListener('click', function (event) {
	if (event.clientY < 110) {
		let place = checkPlace(event.clientX);

		switch (place) {
			case 1:
				clickPos = 0;
				break;

			case 2:
				clickPos = 1;
				break;

			case 3:
				clickPos = 2;
				break;

			case 4:
				clickPos = 3;
				break;
		}
	}

	if (event.clientY > 110 && event.clientY < 210) {
		let place = checkPlace(event.clientX);

		switch (place) {
			case 1:
				clickPos = 4;
				break;

			case 2:
				clickPos = 5;
				break;

			case 3:
				clickPos = 6;
				break;

			case 4:
				clickPos = 7;
				break;
		}
	}

	if (event.clientY > 210 && event.clientY < 310) {
		let place = checkPlace(event.clientX);

		switch (place) {
			case 1:
				clickPos = 8;
				break;

			case 2:
				clickPos = 9;
				break;

			case 3:
				clickPos = 10;
				break;

			case 4:
				clickPos = 11;
				break;
		}
	}

	if (event.clientY > 310 && event.clientY < 410) {
		let place = checkPlace(event.clientX);

		switch (place) {
			case 1:
				clickPos = 12;
				break;

			case 2:
				clickPos = 13;
				break;

			case 3:
				clickPos = 14;
				break;

			case 4:
				clickPos = 15;
				break;
		}
	}

	if (arr15[clickPos - 4] === 0) {
		arr15[clickPos - 4] = arr15[clickPos];
		arr15[clickPos] = 0;

		for (let i = 0; i <= 15; i++) {
			drawTag(i, arr15[i]);
		}
	}

	if (arr15[clickPos + 4] === 0) {
		arr15[clickPos + 4] = arr15[clickPos];
		arr15[clickPos] = 0;

		for (let i = 0; i <= 15; i++) {
			drawTag(i, arr15[i]);
		}
	}

	if (arr15[clickPos + 1] === 0 && clickPos !== 3 && clickPos !== 7 && clickPos !== 11) {
		arr15[clickPos + 1] = arr15[clickPos];
		arr15[clickPos] = 0;

		for (let i = 0; i <= 15; i++) {
			drawTag(i, arr15[i]);
		}
	}

	if (arr15[clickPos - 1] === 0 && clickPos !== 4 && clickPos !== 8 && clickPos !== 12) {
		arr15[clickPos - 1] = arr15[clickPos];
		arr15[clickPos] = 0;

		for (let i = 0; i <= 15; i++) {
			drawTag(i, arr15[i]);
		}
	}
});
