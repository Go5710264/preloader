### Анимация загрузки данных

К сожалению, страница отдаёт данные довольно медленно, поэтому реализована анимация загрузки результата.

![Demo](./demo.gif)


#### Механизм действия

1. Загрузка данных о курсе валют происходит посредством отправки GET-запрос по адресу *https://students.netoservices.ru/nestjs-backend/slow-get-courses*.
2. По факту загрузки анимация загрузки скрывается.

___

#### На доработку 🛠

Небходимо реализовать кэширование данных. При повторном посещении страницы должны отображаться данные прошлого запроса.