'use strict';

let field = document.querySelector('#search'), 
result = document.querySelector('#search-result');
let search = () => {
	console.log(field.value);
	result.innerHTML = ` ${field.value}`;
	if (result.innerHTML !== '') {
		result.style.display = 'block';
	} else {
		result.style.display = 'none';
	}
}

field.addEventListener('keyup', search);
