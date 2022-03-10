function asker() {
    let age = prompt('How old are you?')
    if (age >= 18) {
        console.log('You may enter')
    } else if (age <= 17) {
        console.log('You are young')
    } else {
        console.log('Its not even a number, asshole')
    }
}
// asker()
function math() {
    let a = prompt('a')
    let method = prompt('m')
    let b = prompt('b')
    switch (method) {
        case '+':
            console.log(+a + +b)
            break;
    
        case '-':
            console.log(+a - +b)
            break;
    
        case '/':
            console.log(+a / +b)
            break;
    
        case '*':
            console.log(+a * +b)
            break;
    
        case '**':
            console.log(a ** +b)
            break;
        // найти процент
        case '%':
            console.log(+b * 100 / +a + '%')
            break;
        default:
            break;
    }
}
// math()
// Я это просто нашел.
const findLongestWord = function(str) {
    let arrStr = str.split(' ');
    let wordLength = 0;
    let longestWord;
    for (let i = 0; i < arrStr.length; i += 1) {
      wordLength = arrStr[1].length;
      if (arrStr[i].length > wordLength) {
        longestWord = arrStr[i];
        return longestWord;
      }
    }
  };
  // Вызовы функции для проверки
  console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'
  console.log(
    findLongestWord("Google do a roll")
  ); // вернет 'Google'
  console.log(
    findLongestWord("May the force be with you")
  ); // вернет 'force' 

let min = function(a, ...b) {
    if (typeof(a) === 'number') {
        console.log(Math.min(a, ...b))
    } else if (Array.isArray(a)) {
        console.log(Math.min(...a, b))
    } else if (typeof(a) === 'object') {
        console.log(Math.min(Object.values(min)))
    }
}
min(1, 2,) 
min([1, 2]) 
min({a: 1, b: 2})

let proportion = function(prop) {
    let a = prompt('a')
    let b = prompt('b')
    let c = prompt('c')
    let d = prompt('d')
    if (a === 'x') {
        console.log(b * c / d)
    } else if (b === 'x') {
        console.log(a * d / c)
    } else if (c === 'x') {
        console.log(a * d / b)
    } else if (d === 'x') {
        console.log(b * c / a)
    }
}
// proportion()