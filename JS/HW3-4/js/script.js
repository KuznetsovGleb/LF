// var wrapper = document.createElement('div');
// wrapper.className = 'wrapper';
// document.body.insertBefore(wrapper, document.body.children[0]);

// var h1 = document.createElement('h1');
// h1.style.textAlign = 'center';
// h1.innerHTML = "Тест по программированию";
// wrapper.appendChild(h1);

// var question = document.createElement('ol');
// question.style.marginLeft = '20px';
// wrapper.appendChild(question);

// /*var liArray = [li1, li2, li3]; */
// var li1 = document.createElement('li');
// li1.innerHTML = "Вопрос №1";
// question.appendChild(li1);

// var li2 = document.createElement('li');
// li2.innerHTML = "Вопрос №2";
// question.appendChild(li2);

// var li3 = document.createElement('li');
// li3.innerHTML = "Вопрос №3";
// question.appendChild(li3);

// /* SUBMENU */

// var answer1 = document.createElement('ul');
// li1.appendChild(answer1);


// var answerVariant1 = document.createElement('li');
// answerVariant1.style.listStyle = 'none';

// var inputForVariant1 = document.createElement('input');
// inputForVariant1.setAttribute('type', 'radio');
// inputForVariant1.setAttribute('id', 'radio1');
// answerVariant1.appendChild(inputForVariant1);

// var labelForVariant1 = document.createElement('label');
// labelForVariant1.setAttribute('for', 'radio1');
// labelForVariant1.innerHTML = "Вариант ответа №1";
// answerVariant1.appendChild(labelForVariant1);


// var answerVariant2 = document.createElement('li');
// answerVariant2.style.listStyle = 'none';

// var inputForVariant2 = document.createElement('input');
// inputForVariant2.setAttribute('type', 'radio');
// inputForVariant2.setAttribute('id', 'radio2');
// answerVariant2.appendChild(inputForVariant2);

// var labelForVariant2 = document.createElement('label');
// labelForVariant2.setAttribute('for', 'radio2');
// labelForVariant2.innerHTML = "Вариант ответа №2";
// answerVariant2.appendChild(labelForVariant2);


// var answerVariant3 = document.createElement('li');
// answerVariant3.style.listStyle = 'none';

// var inputForVariant3 = document.createElement('input');
// inputForVariant3.setAttribute('type', 'radio');
// inputForVariant3.setAttribute('id', 'radio3');
// answerVariant3.appendChild(inputForVariant3);

// var labelForVariant3 = document.createElement('label');
// labelForVariant3.setAttribute('for', 'radio3');
// labelForVariant3.innerHTML = "Вариант ответа №3";
// answerVariant3.appendChild(labelForVariant3);


// answer1.appendChild(answerVariant1);
// answer1.appendChild(answerVariant2);
// answer1.appendChild(answerVariant3);

// var answer2 = answer1.cloneNode(true);
// li2.appendChild(answer2);
// var answer3 = answer1.cloneNode(true);
// li3.appendChild(answer3);

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

	/* FOBIACHI */
	
function fib(n) {
	var arr = [1, 1];
	var sum = 0;
	for (var i = 2; i <= n; i++) {
		sum = sum + arr[i-2];
		arr[i] = sum;
	}
	arr.shift();
	return arr[n-1];
}
console.log( fib( +prompt('Number', 7) ) );

