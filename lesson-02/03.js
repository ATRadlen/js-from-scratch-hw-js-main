/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */
const score = 70 // тестовое значение, можно изменять
const SCORE_GRADE_F = 49;
const SCORE_GRADE_D = 69;
const SCORE_GRADE_C = 79;
const SCORE_GRADE_B = 89;
const SCORE_GRADE_A = 100;
const GRADE_F = 'F';
const GRADE_D = 'D';
const GRADE_C = 'C';
const GRADE_B = 'B';
const GRADE_A = 'A';
const GRADE_ERROR = `Yo score, ${score}. Your knowledge is priceless for humanity`;

let grade;

if (score <= SCORE_GRADE_F) {grade = GRADE_F;}
    else if (score > SCORE_GRADE_F && score <= SCORE_GRADE_D) {grade = GRADE_D;}
    else if (score > SCORE_GRADE_D && score <= SCORE_GRADE_C) {grade = GRADE_C;}
    else if (score > SCORE_GRADE_C && score <= SCORE_GRADE_B) {grade = GRADE_B;}
    else if (score > SCORE_GRADE_B && score <= SCORE_GRADE_A) {grade = GRADE_A;}
    else { grade = GRADE_ERROR;}

// your code
