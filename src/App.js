import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
          <Route exact path="/" component={Home} />
          <Route exact path="/img" component={Images} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
          <Route path="/aboutfilms" component={AboutFilms} />

        </AnimatedSwitch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Мой влог</h2>;
}

function Images() {
  return (
    <div class="grid">
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
      <img src="http://www.youloveit.ru/uploads/gallery/main/836/youloveit_ru_miraculous_ladybug_season_2_2.jpg"/>
    </div>
  );
  
}

function About() {
  return <h2>About</h2>;
}

function Test() {
  return (
    <div>
      <span class="span">12.12.12</span>
      <h2 id="id_H2_1"> Кино</h2>
      <div>
        <p id="id_Div_1" tabindex="1" class="f-s"><img class="img" src="https://24smi.org/public/media/resize/660x-/person/2018/01/19/jfrvsah6h4kt-sheldon-kuper.jpg" alt=""/>Любимый сериал это...</p>
        <h3>Мои задачи на эту тему</h3>
        <input type="checkbox"/> Посмотреть 13 эпизод
        <input type="checkbox" checked=""/> Почитать о Шелдоне в Википедии
        <input type="checkbox"/> Узнать о отношениях с Эмили
      </div>
      
      <hr/>
      <span>31-01.12-01.18-19</span>
      <h2 id="id_H2_2">НГ</h2>
      <div>
        
        <p id="id_Div_2" tabindex="1" class="f-s"><img class="img" src="https://images.aif.ru/015/480/7afe527e89f0652561a67c4fbfaa7918.jpg" alt=""/>А я считала, что Новый Год это весело...</p>
        <h3>Мои задачи на эту тему</h3>
        <input type="checkbox" checked=""/> Подготовить к НГ игры и конкурсы
        <input type="checkbox"/> Провести Новый Год весело
        <input type="checkbox"/> Сходить посмотреть на салюты
      </div>
    </div>
      
    );

}
function AboutFilms() {
  return (
      <div> 
          <span class="span">12.12.18</span>
    <h2 class="h2">Кино</h2>
    <div class="div">
      <img class="img" src="https://24smi.org/public/media/resize/660x-/person/2018/01/19/jfrvsah6h4kt-sheldon-kuper.jpg" alt=""/>
      <p class="p">Какой мой любимый сериал? Теория Большого Взрыва! Мне нравится этот сериал по многим причинам. И одна из них, что большинство сериалов построено на затянутых однотипных ситуациях. В Big Bang Theory же все иначе. Но самой главной причиной моей любви к Big Bang Theory является то, что Big Bang Theory это комедия, что, собственно, и привлекает таких подростков, как я. Но самой большученной причиной моей любви к этому сериалу это тооо, что в этом сериале играет Джим Парсонс-Шелдон Купер. Джим Парсонс – американский актер-комик, ставший настоящей легендой в своем жанре благодаря роли заумного, но безумно милого физика Шелдона Купера из телесериала «Теория большого взрыва». Джим Джозеф Парсонс (James Joseph Parsons), как и его знаменитый экранный персонаж, появился на свет в 1973 году в Техасе, в городе Хьюстон. Его мама была учителем младших классов, а отец владел небольшой компанией, специализирующейся на оказании услуг сантехнического профиля. Помимо Джеймса Джозефа в семье Парсонсов был еще один ребенок – младшая сестра Джима, которая в настоящее время работает школьным учителем. С самых ранних лет Парсонс отличался добротой и дружелюбием, в конце школы ему подарили даже грамоту «Самому дружелюбному однокласснику». Школьные приятели актера говорят о том, что в детстве он был весьма стеснительным и застенчивым ребенком.Окончив среднюю школу, будущий комик поступил в престижный Университет Хьюстона, в котором за три года обучения сыграл в 17 спектаклях. Стараясь превратить давнее увлечение в прибыльный бизнес, молодой актер вместе с парой единомышленников основал свою собственную театральную труппу, которая существует до сих пор. В 1999 году Джим Парсонс подал документы в Университет города Сан-Диего, где стал одним из семи молодых актеров, принятых на специальную программу классического театрального искусства. Актера прославил на весь мир популярный телесериал «Теория большого взрыва» (2007-2013), где он сыграл молодого гениального физика, доктора наук Шелдона Купера. Прочитав сценарий, Джим был очарован диалогами и понял, что роль Купера подходит ему как нельзя лучше. Несмотря на разницу в характерах героя и его исполнителя, на первом прослушивании Парсонсу удалось сильно впечатлить одного из авторов проекта – Чака Лорри. В 2010 и 2011 годах Джим был номинирован на премию «Эмми» в категории «Лучший комедийный актер». В 2011-м актер воплотил Крэйна в ленте «Большой год». </p>
      <h3>Мои задачи на эту тему</h3>
      <input type="checkbox"/> Посмотреть 13 эпизод
      <input type="checkbox" checked=""/> Почитать о Шелдоне в Википедии
      <input type="checkbox"/> Узнать о отношениях с Эмили
    </div>
      </div>
    );
}

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <ul class="navbar-nav mr-auto collapse navbar-collapse" id="navbarNav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item active"> 
            <Link class="nav-link" to="/img">Lady Bag</Link>
          </li>
          <li class="nav-item active"> 
            <Link class="nav-link" to="/aboutfilms">О кино</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/test">Test</Link>
          </li>

        </ul>
    </nav>
  );
}

export default App;