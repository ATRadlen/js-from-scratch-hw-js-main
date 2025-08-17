/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let arrayStr = str.split('');
    let newArrayStr = [];
    for (let i = 0; i < arrayStr.length; i++) {
        for (let j = 0; j < 2; j++) {
            newArrayStr.push(arrayStr[i]);
        }
    }
    return newArrayStr.join('');
}
