function palindromo () {
    var word = prompt('ingresa tu frase')
    word = word.toLowerCase();
    word = word.replace(/\s/g, '');

    newWord = word.split('').reverse().join('');

    if (word == newWord) {
        console.log('Tienes un Palindromo!');
    } else {
        console.log('No es un Palindromo!')
    }
}


function palindromo2() {
    var word = prompt('ingresa tu frase')
    word = word.toLowerCase();
    word = word.replace(/\s/g, '');

    var newWord = '';

    for( var i = word.length - 1; i >= 0; i--) {
        newWord = newWord + word[i];
    }
    console.log(newWord);

    if (word == newWord) {
        console.log ('tienes un palindromo');
    } else {
        console.log('no tienes un palindromo');
    }
}


function palindromo3() {
    var word = prompt('escribe tu ultma frase')
    
}