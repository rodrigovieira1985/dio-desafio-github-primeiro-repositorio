function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por nada`);
			array[i] = "";
		} else if (!naoZero(array[i])) {
			array[i] = "";
			console.log('Você é zero vira nada!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);
