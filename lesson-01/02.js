/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let ARGUMENT_FACTORIAL = 10;
let factorial;
if (ARGUMENT_FACTORIAL <= 1) {
    factorial = 1;
}else {
    factorial = ARGUMENT_FACTORIAL;
    while (factorial > 2){
        factorial--;
        factorial *= ARGUMENT_FACTORIAL;
    }
}
