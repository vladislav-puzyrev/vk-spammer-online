import React from 'react'
import s from './Instructions.module.css'
import attachment from '../../assets/screenshots/attachment.png'
import comments from '../../assets/screenshots/comments.png'
import discussions from '../../assets/screenshots/discussions.png'
import groupsWalls from '../../assets/screenshots/groups-walls.png'
import pm from '../../assets/screenshots/pm.png'
import talks from '../../assets/screenshots/chat.png'
import usersWalls from '../../assets/screenshots/users-walls.png'

function Instructions () {
  return (
    <>
      <h2 className={s.title}>Инструкция по использованию</h2>
      <div className={s.instructions}>
        <ul className={s.list}>
          <li className={s.list__item}>
            <h3 className={s.subtitle}>Запуск браузера с выключенным CORS</h3>
            <p>
              Откройте браузер на основе Chromium с выключенным CORS. В противном случае работать с VK API из браузера
              не получится. Пример запуска Chrome для Windows:
              <pre>
                "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="C://chrome-dev-disabled-security"
              </pre>
            </p>
            <p>
              Можно сделать .bat файл, чтобы не прописывать команду каждый раз.
            </p>
            <h3 className={s.subtitle}>Адресаты рассылки</h3>
            <ul className={s.addressesList}>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Личные сообщения</h4>
                <p>
                  Здесь поддержвиваются стандартные и кастомные id пользователей.
                </p>
                <img className={s.screenshot} src={pm} alt="pm"/>
              </li>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Беседы</h4>
                <p>
                  Чтобы получить id беседы откройте её, затем в адресной строке браузера вы увидите её порядковый номер
                  относительно всех бесед в которых вы состоите. Режим рассылки "беседы с автовыходом" покидает беседу
                  сразу после отправки сообщения, чтобы вас например не исключили.
                </p>
                <img className={s.screenshot} src={talks} alt="talks"/>
              </li>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Стены юзеров</h4>
                <p>
                  Для спама на стены нужен именно <b>числовой id пользователя</b>. В случае если пользователь сменил
                  свой id на кастомный можно открыть например любую его фотографию, в url-адресе которой обязательно
                  будет содержаться его числовой id после слова "photo" до "_".
                </p>
                <img className={s.screenshot} src={usersWalls} alt="usersWalls"/>
              </li>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Стены групп</h4>
                <p>
                  Здесь нужен именно <b>числовой id сообщества</b>. Для того чтобы получить его можно например открыть
                  фотографию сообщества, в url-адресе которой обязательно будет содержаться числовой id группы после
                  слова "photo" до "_".
                </p>
                <img className={s.screenshot} src={groupsWalls} alt="groupsWalls"/>
              </li>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Коментарии</h4>
                <p>
                  Для спама в комментарии нужно использовать <b>идентификатор записи</b>. Для этого откройте любую
                  запись и из url-адреса скопируйте значение после "wall" до знака "%". Обратите внимание id записей в
                  группах будет всегда начинаться со знака "-", его тоже надо копировать!
                </p>
                <img className={s.screenshot} src={comments} alt="comments"/>
              </li>
              <li className={s.addressesList__item}>
                <h4 className={s.addressesList__title}>Обсуждения</h4>
                <p>
                  Откройте любое обсуждение и скопируйте из url-адреса значение после "topic-".
                </p>
                <img className={s.screenshot} src={discussions} alt="discussions"/>
              </li>
            </ul>
          </li>
          <li className={s.list__item}>
            <h3 className={s.subtitle}>Вложения</h3>
            <div>
              <p>
                Для того чтобы прикрепить к сообщению любое вложение, нужно чтобы это фото / видео и т.д. было уже
                залито в вк, кроме того находилось в открытом доступе например на открытой стене, или открытом альбоме.
              </p>
              <p>
                Далее откройте эту запись и из url-адреса скопируйте текст начиная со слова photo
                (может быть video и т.д.) до знака "%" не включительно. Можете просто дважды кликнуть на слове photo и
                браузер сам правильно выделит то что нужно. Максимальное количество возможных вложений - 10
              </p>
              <img className={s.screenshot} src={attachment} alt="attachment"/>
            </div>
          </li>
          <li className={s.list__item}>
            <h3 className={s.subtitle}>Антикапча</h3>
            <div>
              <p>
                Спамер интегрирован с сервисом
                <a className={s.a} target="_blank" rel="noopener noreferrer"
                   href="https://anti-captcha.com"> anti-captcha.com</a>.
                На нем работают реальные люди которые отгадывают нам капчу и получают за это деньги. Разгадывание капчи
                <b> платное</b>. Цена примерно <b>0.05₽</b> за одну капчу картинку.
              </p>
              <p>
                Чтобы работал режим антикапчи нужно ввести ключ учетной записи полученный на этом сервисе. Для начала
                зарегистрируйтесь на нем, ключ после пополнения баланса можно будет взять
                здесь - <a className={s.a} target="_blank" rel="noopener noreferrer"
                           href="https://anti-captcha.com/clients/settings/apisetup">
                anti-captcha.com/clients/settings/apisetup
              </a>.
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <h3 className={s.subtitle}>Рандомизация</h3>
            <div>
              <p>
                В отправляемом тексте и вложениях поддерживается <b>синтаксис рандомизации</b>. При отправке сообщения
                он <b>случайным образом выбирает один из перечисленных вариантов</b>. Рандомизация снижает вероятность
                капчи и бана.
              </p>
              <p>
                Для рандомизации сообщения или вложения пишите все варианты в двойных квадратных скобках "[[ ]]" через
                символ "|". Примерно так: [[ Саша | Лена | Настя ]]
              </p>
            </div>
          </li>
          <li className={s.list__item}>
            <h3 className={s.subtitle}>Смена фото и названия беседы</h3>
            <div>
              <p>
                Сейчас этот функционал является эксперементальным, но рабочим. Пока я не могу найти этому место в
                интерфейсе спамера, но в будущем доделаю его.
              </p>
              <p>
                Чтобы настроить это откройте консоль браузера (клавиша F12) и прямо там напишите две команды:
                <br/>
                <b>window.title = "В кавычках пишите желаемое название"</b>
                <br/>
                <b>window.image = "Специальная строка, об этом далее"</b>
              </p>
              <p>
                Для смены фото беседы, нужно получить специальную строку с сервера вк, в будущем я добавлю всё это в
                удобный интерфейс. Зайдите сюда <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.a}
                href="https://vk.com/dev/photos.getChatUploadServer">
                https://vk.com/dev/photos.getChatUploadServer
              </a>.
              </p>
              <p>
                Прокрутите страницу вниз и в примере запроса укажите chat_id (id беседы где надо менять фотографию),
                очистите поля crop_x и crop_y (они отвечают за обрезку фото), далее нажмите выполнить, потом нажмите
                кнопку выбора файла и после выбора появится окно с ответом, где надо скопировать огромную строку
                response. Нужно скопировать именно значение ключа response, а не весь ответ сервера! Это и есть нужная
                вам строка для window.image <span role="img" aria-label="smile">😉</span>
              </p>
              <p>
                Эти значения нигде не сохраняются, поэтому при перегазрузке страницы придется вносить их снова, я бы
                копировал строку картинки в файл чтобы каждый раз не получать её. Еще раз напомню что в будущем внесу
                этот функционал в интерфейс!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Instructions
