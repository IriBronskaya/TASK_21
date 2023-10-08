// Получаем элементы DOM
const pageInput = document.getElementById("pageInput");
const limitInput = document.getElementById("limitInput");
const submitButton = document.getElementById("submitButton");
const errorText = document.getElementById("errorText");
const imageList = document.getElementById("imageList");

// Функция для выполнения запроса и отображения изображений
function fetchImages(page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => response.json())
        .then((data) => {
            // Сохраняем данные в localStorage
            localStorage.setItem("images", JSON.stringify(data));
            displayImages(data);
        })
        .catch((error) => {
            console.error("Ошибка запроса:", error);
        });
}

// Функция для отображения списка изображений
function displayImages(images) {
    imageList.innerHTML = "";
    images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.download_url;
        imageList.appendChild(imgElement);
    });
}

// Обработчик события клика на кнопку "Запрос"
submitButton.addEventListener("click", () => {
    const page = parseInt(pageInput.value);
    const limit = parseInt(limitInput.value);

    // Проверяем введенные значения
    if (isNaN(page) || page < 1 || page > 10 || isNaN(limit) || limit < 1 || limit > 10) {
        errorText.textContent = "Номер страницы и/или лимит вне диапазона от 1 до 10";
        imageList.innerHTML = "";
    } else {
        errorText.textContent = "";
        fetchImages(page, limit);
    }
});

// Проверяем наличие данных в localStorage и отображаем их
const savedImages = localStorage.getItem("images");
if (savedImages) {
    displayImages(JSON.parse(savedImages));
}
