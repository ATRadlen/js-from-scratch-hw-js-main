// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number_1, number_2, number_3) {
    let largest = number_1;
    if (number_2 > largest) { largest = number_2; }
    if (number_3 > largest) { largest = number_3; }
    return largest;
}
