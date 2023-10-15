//условные операторы

// тернарные операторы- это ? и :
let age = prompt ('Ваш возраст?',18);
let access = (age > 18) ? true : false;//усли до 18 вкл.- то false, усли больше, то true
// условие заключаеи в скобки, потом ставим вопрос, после вопроса идет значение,кот-е истина, поьом то значение, кот-е ложное
console.log (access);

(age > 18) ? console.log ('доступ разрешен') : console.log ('доступ зaпрещен');

let message = (age < 3) ? 'здраствуй, малыш!' :
            (age < 18) ? 'Привет!' :
            (age < 100) ? 'здраствуйте!' : 'Какой нербычный возраст';
console.log ('message');

console.log ();

console.log ();

console.log ();

console.log ();

console.log ();

console.log ();

console.log ();

console.log ();