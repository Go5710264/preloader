const img = document.querySelector('img'); 
let rateListWrapper = document.getElementById('items');
const currencyExchangeClone = document.querySelector('.item'); 
currencyExchangeClone.setAttribute('style','display: none;')


const xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onload = function() {
    img.classList.remove('loader_active'); 
    const result = JSON.parse(xhr.response);
    
    for (const [key, value] of Object.entries(result.response)) {
        if (key === 'Valute') {
            for (const [currency, rate] of Object.entries(value)) {
                let itemCurrency = currencyExchangeClone.cloneNode(true);

                Object.entries(rate).forEach(([key, value]) => {
                    if(key === 'CharCode') {
                        itemCurrency.querySelector('.item__code').textContent = value;
                    } else if (key === 'Value') {
                        itemCurrency.querySelector('.item__value').textContent = value;
                    }
                })

                itemCurrency.setAttribute('style', 'display: flex'); 
                rateListWrapper.appendChild(itemCurrency); 
            }        
        }
    };
}

