/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
// const isAdmin = false
// const isVerifiedUser = true
// const hasSpecialPermission = true
// const hasTemporaryPass = false

// let isAccess

// your code

const isAdmin = "админ"
const isVerifiedUser = "сотрудник"
const hasSpecialPermission = "разрешение"
const hasTemporaryPass = "зеленая карточка"

let isAccess = false;


while (!isAccess) {
        const userStatus = prompt ("Введите свой статус!").toLowerCase();
        
    if (userStatus === isAdmin) { 
    alert ("Вы администратор! Проверим ваши разрешения") 
    } else if (userStatus === isVerifiedUser) {
    alert ("вы являетесь сотрудником ! Проверим Ваши разрешения !")
    } else {
    alert("введите корректные данные")
    }

    const userPerm = prompt ("У вас есть разрешение или пропуск?").toLowerCase();

    if (userPerm === hasSpecialPermission || userPerm === hasTemporaryPass){
    alert ("вы подтвердили наличие разрешения/пропуска !")
}else {
    alert ("у вас нет пропуска-разрешения, доступ запрещен!")
}

    if (( userStatus === isAdmin || userStatus === isVerifiedUser )&&( userPerm === hasSpecialPermission || userPerm === hasTemporaryPass)){
    alert (" вы получили доступ! ")
    isAccess = true
}   else { 
    alert ("доступ запрещен!")  }
}

