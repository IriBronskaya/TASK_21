/*Задание 3.

Написать скрипт, который при открытии страницы будет делать следующее:
Если пользователь зашел в первый раз, вывести окно prompt с сообщением: 
«Добро пожаловать! Назовите, пожалуйста, ваше имя».

После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.
Подсказка: для определения текущей даты используйте new Date().
Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage), вывести в alert сообщение вида: «Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас *дата последнего посещения*» и перезаписать дату последнего посещения.
Дату можно вывести в любом удобочитаемом формате (не Timestamp, должен четко читаться день, месяц, год и время — часы и минуты). */


const myKey = localStorage.getItem('myKey');
if (!myKey) {

    let firstName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', '');
    localStorage.setItem('name', firstName);
    localStorage.setItem('date', new Date().toLocaleString());
    console.log(localStorage.getItem('date'));
    localStorage.setItem('myKey', 'Not at first');
} else {
    let name = localStorage.getItem('name');
    let date = localStorage.getItem('date');
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`);
    localStorage.setItem('date', new Date().toLocaleString());

}