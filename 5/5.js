/*Задание 5.

Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач». 
При нажатии на кнопку нужно отправить запрос 
с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos. 
Число 3 представляет собой id пользователя, вместо него нужно подставить число, 
введенное в поле. Если пользователь с таким id существует, вернется список задач для 
этого пользователя, каждая задача представлена объектом вида:

{
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
}
Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет.
 Вывести данный список на страницу, оформив соответствующим образом: в виде списка
  (ul или ol), выполненные задачи должны быть написаны зачеркнутым текстом. 
  Если пользователь с введенным id не существует, вывести сообщение: 
  «Пользователь с указанным id не найден». */
  
  document.addEventListener("DOMContentLoaded", () => {
    const userIdInput = document.getElementById("userIdInput");
    const getTasksButton = document.getElementById("getTasksButton");
    const tasksList = document.getElementById("tasksList");

    getTasksButton.addEventListener("click", () => {
        const userId = userIdInput.value;
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const taskListHTML = data.map(task => `
                            <li class="${task.completed ? 'completed' : ''}">
                                ${task.title}
                            </li>
                        `).join('');
                        tasksList.innerHTML = `<ul>${taskListHTML}</ul>`;
                    } else {
                        tasksList.innerHTML = "Пользователь с указанным ID не найден.";
                    }
                })
                .catch(error => {
                    console.error("Ошибка при получении данных:", error);
                    tasksList.innerHTML = "Произошла ошибка при получении данных.";
                });
        } else {
            tasksList.innerHTML = "Пожалуйста, введите ID пользователя.";
        }
    });
});
