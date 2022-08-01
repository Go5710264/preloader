const img = document.querySelector('img'); // доступ к изображению
const currencyExchangeClone = document.querySelector('.item'); // константа для клонирования
currencyExchangeClone.setAttribute('style','display: none;')
console.log(img)

let xhr = new XMLHttpRequest(); // экземпляр объекта XMLHttpRequest  
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com'); // инициализация запроса
xhr.send();

xhr.onload = function() {
    img.classList.remove('loader_active'); // удаление изображения загрузки
    const result = JSON.parse(xhr.response); // изменение типа данных результата ответа сервера из строки в объект
    for (const [key, value] of Object.entries(result.response)) {
        if (key === 'Valute') {
            for (const [currency, rate] of Object.entries(value)) {
                let itemCurrency = currencyExchangeClone.cloneNode(true); //клонирование тега
                Object.entries(rate).forEach(([key, value]) => {
                    // console.log(`${key} ${value}`)
                    if(key === 'CharCode') {
                        itemCurrency.querySelector('.item__code').textContent = value;
                    } else if (key === 'Value') {
                        itemCurrency.querySelector('.item__value').textContent = value;
                    }
                })
                console.log(itemCurrency)
                
                // rate.firstElementChild.textContent = key;
                // console.log(rate);
            }
            
        }
    };
    // console.log(typeof rr)
}

