/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const INITIAL_NUMBER = 1;
const FINAL_NUMBER = 20;
let sum = 0;
let i = INITIAL_NUMBER;
while (i <= FINAL_NUMBER){
    if(i%2 !== 0){
        sum += i;
    }
    i++;
}
