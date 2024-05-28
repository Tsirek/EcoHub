import React, { useState, useEffect } from 'react';
import { Button, Text, chakra } from '@chakra-ui/react';
import axios from 'axios';


export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [news, setNews] = useState([])
  const [first, setFirst] = useState(0)
  const [img, setImg] = useState([])
  const [returns, setReturns] = useState([]);

  const url = "http://127.0.0.1:8000/api/news/get_news";
  const url2 = "http://127.0.0.1:8000/api/news/get_news_img?news_id=";

  let getNormalDate = (datetime) => {
    let date = datetime.split('T')[0];
    let time = datetime.split('T')[1];

    let day = date.split('-')[2];
    let month = date.split('-')[1];
    let year = date.split('-')[0];

    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    return hour + ':' + minute + ', ' + day + '.' + month + '.' + year;
  };
  const [currentPage, setcurrentPage] = useState(1)
  let showNewNews =() => {
    setcurrentPage(currentPage + 1)
    
    fetchDataNews() 
    
    console.log(currentPage)
  }

  const fetchDataNews = async () => {
    let news_length = 0;
    let news2 = [];
    let img2 = [];
    let returns2 = [];
    await axios.get(url).then(function (response) {
      setNews(response.data);
      news_length = response.data.length;
      news2 = response.data;
    });
    news2 = news2.slice(-9*currentPage);
    for (let i = 0; i < news2.length; i++) {
      setImg([...img, url2 + news2[i].id]);
      img2 = [...img2, url2 + news2[i].id];
    }
    for (let i = 0; i < news2.length; i++) {
      returns2 = [...returns2, [news2[i], img2[i]]];
    }
    setReturns(returns2.reverse());
  };

  useEffect(() => {
    fetchDataNews();
    
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  

  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Erica+One&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <title>EcoHub - новости о природе</title>
        
  
      </head>
      <body>
        <header class="header">
          <h1 class="logo">EcoHub</h1>
          <a class="header__logo">
            <img class="header__logo-image" src="./img/fon-3.png" alt="Логотип-туча" />
          </a>
          <nav class="header__menu">
            <ul class="header__links-list">
              <li class="header__links-list-item">
                <a class="header__link" href="#facts">Главная</a>
              </li>
              <li class="header__links-list-item">
                <a class="header__link" href="#news">Новости</a>
              </li>
              <li class="header__links-list-item">
                <a class="header__link" href="#Us">
                  О нас
                </a> 
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section class="main_event">
            <aside>
              <img class="main__image" src="./img/fon-2.png" alt="Половинка планеты, с растущим лесом и жирафом" />
              <img class="support__image" src="./img/fon-3.png" alt="Тучка слева от основной картинки" />
              <img class="support__image2" src="./img/fon-3.png" alt="Тучка справа от основной картинки" />
              <img class="path" src="./img/path.png" />
              <img class="path1" src="./img/path.png" />
              <img class="path2" src="./img/path.png" />
            </aside>
            <article>
              <h3 class="news" id="facts">Интересные</h3>
              <h3 class="news1">Факты</h3>
              <div class="itcss" id="slider-1">
                <div class="itcss__wrapper">
                  <div class="itcss__items">
                    <div class="itcss__item">
                      <span class="slider__item_title">
                        Факт 1
                      </span>
                      <span class="slider__items_description">
                        Деревья - наши союзники: 
                        Они выделяют кислород и поглощают углекислый газ, 
                        помогая балансировать атмосферу.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                        Факт 2
                      </span>
                      <span class="slider__items_description">
                        Океаны - легкие планеты: 
                        Они поглощают огромное количество углекислого газа, 
                        смягчая воздействие глобального потепления.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                        Факт 3
                      </span>
                      <span class="slider__items_description">
                        Пластик - угроза морской жизни: 
                        Неправильное использование пластика загрязняет океаны и угрожает животным.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                        Факт 4
                      </span>
                      <span class="slider__items_description">
                        Электромобили - будущее транспорта: 
                        Они чище и эффективнее по сравнению с автомобилями на бензине.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                        Факт 5
                      </span>
                      <span class="slider__items_description">
                        Переработка - наш выбор: Путем переработки мы можем уменьшить количество 
                        отходов и сохранить ресурсы планеты.
                        </span>
                    </div>
                  </div>
                </div>
                <a class="itcss__btn itcss__btn_prev" href="#" role="button" data-slide="prev"></a>
                <a class="itcss__btn itcss__btn_next" href="#" role="button" data-slide="next"></a>
              </div>
              <h3 class="news3" id="Us">Наша</h3>
            <h3 class="news4">Команда</h3>
            <div class="itcss" id="slider-2">
                <div class="itcss__wrapper">
                  <div class="itcss__items">
                    <div class="itcss__item">
                      <span class="slider__item_title"> 
                      <a href="https://t.me/lali_lali_lali11" >
                        Кирилл Долда 
                      </a>
                      </span>
                      <span class="slider__items_description">
                        Фронтэнд-разработка. Героически посмотрел сотни часов обучающих роликов, генерировал кучи дизайнерских идей, которые жестоко разбились о реалии этого мира.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                      <a href="https://t.me/Tsirek" >
                        Кирилл Кириллов
                      </a>
                      </span>
                      <span class="slider__items_description">
                        Фронтэнд-разработка. Исправил тысячу и один div начальной вёрстки. Всячески старался покорить JavaScript, гордо признал поражение.
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title">
                      <a href="https://t.me/Gonne6" >
                        Андрей Каменский
                      </a>
                      </span>
                      <span class="slider__items_description">
                        Бекэнд-разработка. Пытался поставить антирекорд при создании быстрого парсера, обладает пассивной способностью "Безграничная уверенность."
                        </span>
                    </div>
                    <div class="itcss__item">
                      <span class="slider__item_title"> 
                      <a href="https://t.me/Ferraronp" >
                        Артур Авзалов
                      </a>
                      </span>
                      <span class="slider__items_description">
                        Бекэнд-разработка. Единственный человек, который знал , что делает, сорвал антирекорд Андрея по парсеру, зверски эксплуатировался фронтэндом, как самый умный член команды.
                        </span>
                    </div>
                  </div>
                </div>
                <a class="itcss__btn itcss__btn_prev" href="#" role="button" data-slide="prev"></a>
                <a class="itcss__btn itcss__btn_next" href="#" role="button" data-slide="next"></a>
            </div>
            </article>
          </section>
          <section class="sector__news" id="news">
            <h3 class="news3">Новости</h3>
            <h3 class="news4">Экология</h3>
            <article class="sector__main">
              {returns.map((imgg) => (
                <div class="sector">
                  <img class="sector__image" id="ItemPreview" src={imgg[1]} />
                  <Text class="sector__text">
                    {imgg[0].content}
                    <br />
                    Дата: {getNormalDate(imgg[0].date)}
                    <br />
                    <a href={imgg[0].url}>Источник</a>
                  </Text>
                </div>
              ))}
              <chakra.form
                onSubmit={(e) => {
                    e.preventDefault() // Без перезагрузки приложения после добавления задачи
                    showNewNews()
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="20px"
            >
                <Button
                    type="submit"
                    w="fit-content"
                    background="green.700"
                    color="white"
                    _hover={{
                        background: 'green.600',
                    }}
                >
                    Показать ещё
                </Button>
            </chakra.form>
            </article>
          </section>
        </main>
        <footer class="footer">
          <nav class="footer__menu">
            <ul class="footer__menu-list">
              <li class="footer__menu_list-item">
                <a class="footer__menu-link" href="#facts">Главная</a>
              </li>
              <li class="footer__menu_list-item">
                <a class="footer__menu-link" href="#news">Новости</a>
              </li>
              <li class="footer__menu_list-item">
                <a class="footer__menu-link" href="#Us">О нас</a>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
};
