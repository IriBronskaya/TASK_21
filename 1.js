/*Задание 1.
Вам дана заготовка и результат, который вы должны получить. 
Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

результат:
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/

// Этап 1. Подготовка данных

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// Этап 2. Получение данных

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод студентов
const studentNodes = xmlDOM.querySelectorAll("student");

// Создадим массив для хранения результатов
let result = {
  list: [],
};

// Итерируемся по каждой DOM-ноде студента и извлекаем данные
studentNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");

  // Создаем объект с данными студента
  const studentData = {
    name: `${firstNode.textContent} ${secondNode.textContent}`,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
  };

  // Добавляем данные студента в массив результатов
  result.list.push(studentData);
});

// Этап 3. Запись данных в результирующий объект
console.log(result);