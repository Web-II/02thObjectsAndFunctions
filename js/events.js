const myAvatar = {
	name: 'Bob',
	points: 20,
	gender: 'male',
	hair: { color: 'black', cut: 'punk' },
	sayHi: function() {
		const title = this.gender === 'male' ? 'Sir' : 'Miss';
		return `Hi, I am ${title} ${this.name}`;
	}
};

const sayHiClicked = function() {
	alert(myAvatar.sayHi());
	alert(`this: ${this} & this.id: ${this.id}`);
};

const init = function() {
	const sayHiButton = document.getElementById('sayHi');
	sayHiButton.onclick = sayHiClicked;
};

const beClever = function() {
	alert(`I know you clicked on button that says ${this.value}`);
};

// const init = function() {
// 	const sayHiButton = document.getElementById('sayHi');
// 	sayHiButton.addEventListener('click', sayHiClicked);
// 	sayHiButton.addEventListener('click', beClever);
// };

window.onload = init;
