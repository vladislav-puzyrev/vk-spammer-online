Этот репозиторий не поддерживается.

<p align="center">
  <img src="https://user-images.githubusercontent.com/52296792/85717731-3fb98b80-b707-11ea-8150-fc23cb4952a4.png" alt="logo"/>
</p>

<hr/>

<div align="center">
    <b>💥 Бесплатный спамер для вк работающий в браузере 💥</b>
    <br>
    <br>
    <img src="https://user-images.githubusercontent.com/52296792/85111159-61a99e80-b22d-11ea-9e6d-9342c90e8b02.png" alt="screenshot"/>
    <br>
    <br>
    <a href="https://vladislav-puzyrev.github.io/vk-spammer-online"><b>Начать использовать VK-SPAMER-ONLINE</b></a>
</div>

## Почему VK-SPAMER-ONLINE? 🤔

* Бесплатный на 100%
* Не нужно ничего скачивать
* Не воруем и не используем ваши аккаунты
* Open Source проект

## Доступные режимы рассылки 💬

* Личные сообщения
* Беседы
* Беседы с автовыходом
* Стены юзеров
* Стены групп
* Комментарии
* Обсуждения

## Возможности ✔

* Добавление любых вложений
* Поддержка неограниченного количества аккаунтов
* Рандомизация текста и вложений
* Интеграция с [anti-captcha.com](https://anti-captcha.com/)
* Загрузка аккаунтов и списка адресатов из файлов

## Запуск локально 🖥

Вы можете запускать спамер у себя на компьютере, для этого проделайте следующие шаги:

1. Установите Node.js (лучше версию LTS) [https://nodejs.org/ru](https://nodejs.org/ru).
2. Склонируйте или скачайте репозиторий.
3. Выполните команды в корне проекта:

```bash
npm install -g yarn
yarn install
yarn start
```

4. Откройте браузер на основе Chromium с выключенным CORS. В противном случае работать с VK API из браузера не
   получится. Пример запуска Chrome для Windows:

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C://chrome-dev-disabled-security"
```

Можно сделать .bat файл, чтобы не прописывать команду каждый раз.

5. Откройте [http://localhost:3000](http://localhost:3000) в этом браузере 🎉✨
