/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */


function isNumeric(str) {
  // your code
  if (typeof(str) === "string" && str.trim() === "") {
    return false}
    else if (typeof(str) === "string" && str==+str){
      return true
    } else if (typeof(str) === "string"){
      return false
    } else if (typeof(str) === "number"){
      return true
    }
    return false
  } 

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
