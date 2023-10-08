/*Задание 4.

Создать Promise, в котором c задержкой в три секунды сгенерироватьслучайное целое число от 1 до 100. 
Для создания задержки использовать setTimeout. 
Если сгенерированное число четное — Promise выполнится успешно (resolve), 
если нечетное — выполнится с ошибкой (reject). 
После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. 
Вместо number подставить сгенерированное число «Завершено с ошибкой. 
Сгенерированное число — number», если Promise завершился с ошибкой. 
Вместо number подставить сгенерированное число */

function generateRandomNumber() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(randomNumber);
        }
      }, 3000); // Задержка в 3 секунды
    });
  }
  
  generateRandomNumber()
    .then((number) => {
      console.log(`Завершено успешно. Сгенерированное число — ${number}`);
    })
    .catch((number) => {
      console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`);
    });