  ///////////////* FIRST *///////////////

// function sum(a, n) {

// 	console.log('a =', a);

// 	var arr = [];
// 	arr.length = n;

// 	for (var i = 0; i < n; i++) {
// 		arr[i] = a;
// 	}

// 	for (var i = 0; i < arr.length - 1; i++) {
// 		a *= arr[i];
// 		console.log('a =', a, 'n =', i+2);
// 	}
// }

// var a = +prompt("a?", '');
// var n = +prompt("n?", '');

// if (n == 0) {
// 	console.log('a = 1, n = 0');
// }
// else {
// 	sum(a,n)
// }

 ///////////////* SECOND *///////////////

function login() {

	var arr = [];
	arr.length = 5;

	for (var i = 0; i < arr.length; i++) {
		var item = prompt('Name ' + (i+1) , 'Name')
		arr[i] = item;
		console.log('arr[i] = ', arr[i])
	}
	console.log('arr = ', arr);

	// var arr = ['Name', 'kek', 1, 2, 3];
	var checkName = prompt('Enter the username', 'Your username'),
		a = 0;

	for (var i = 0; i < arr.length; i++) {
		if (checkName == arr[i]) {
			alert(checkName + ', вы успешно вошли!');
			break;
		} else {
			a++;
			// alert('Access denied');
		}
	}
	if (a == 5) {
		alert('Access denied');
	}

}

login();





