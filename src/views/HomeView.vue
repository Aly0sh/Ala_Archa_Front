<template>
  <div class="parallax">
    <img
      @click="console.log('Casas')"
      class="sky"
      src="../assets/img/parallax/sky_1.png"
      alt=""
    />
    <img
      :class="parallax ? 'sun-no-active' : 'sun'"
      src="../assets/img/parallax/sun.png"
      alt=""
    />
    <img
      :class="parallax ? 'clouds-no-active' : 'clouds'"
      src="../assets/img/parallax/clouds.png"
      alt=""
    />
    <img
      :class="parallax ? 'back_mount-no-active' : 'back_mount'"
      src="../assets/img/parallax/back_mount1.png"
      alt=""
    />
    <img
      :class="parallax ? 'mid_mount-no-active' : 'mid_mount'"
      src="../assets/img/parallax/mid_mount.png"
      alt=""
    />
    <h1 :class="parallax ? 'parralax-title-no-active' : 'parralax-title'">
      Ала-Арча
    </h1>
    <img
      :class="parallax ? 'front_mount-no-active' : 'front_mount'"
      src="../assets/img/parallax/front_mount.png"
      alt=""
    />
    <img
      :class="parallax ? 'trees-no-active' : 'trees'"
      src="../assets/img/parallax/trees.png"
      alt=""
    />
  </div>

  <div class="container">
    <div class="locations">
      <h1>РЕКОМЕНДУЕМ ПОСМОТРЕТЬ</h1>
      <div class="row">
        <div class="photo">
          <img src="../assets/img/main/1.png" alt="" />
          <h4>Гостиницы</h4>
          <div class="btntext">
            <button id="moreBtn">Узнать подробнее</button>
          </div>
        </div>
        <div class="photo">
          <img src="../assets/img/fauna/bars.jpg" alt="" />
          <h4>Флора "Ала-Арча"</h4>
          <div class="btntext">
            <!-- <h4 style="color: #FDBB46; float: left;">от 2500 с</h4> -->
            <button id="moreBtn">Узнать подробнее</button>
          </div>
        </div>
        <div class="photo">
          <img src="../assets/img/main/3.png" alt="" />
          <h4>Фауна "Ала-Арча"</h4>
          <div class="btntext">
            <!-- <h4 style="color: #FDBB46; float: left;">от 2500 с</h4> -->
            <button id="moreBtn">Узнать подробнее</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="house1">
    <img src="../assets/img/main/4.png" />
    <h4 style="color: white">ПЕРЕЙТИ НА ПРОСМОТР УСЛУГ</h4>
  </div>

  <div class="container">
    <div class="authorization">
      <div class="row">
        <div class="col-6">
          <p>
            Хотите забранировать номер?<br />
            Авторизуйтесь
          </p>
        </div>
        <div class="col-6">
          <div class="button">
            <a href="" class="green now-button font">Авторизуйтесь сейчас</a>
          </div>
        </div>
      </div>
    </div>

    <div class="slider">
      <h2>Слайдер-галерея</h2>
      <div class="row">
        <div class="gallery-slide">
          <img src="../assets/img/main/5.png" alt="" width="100%" />
        </div>
        <div class="gallery-slide">
          <img src="../assets/img/main/6.png" alt="" width="100%" />
        </div>
        <div class="gallery-slide">
          <img src="../assets/img/main/7.png" alt="" width="100%" />
        </div>
      </div>
    </div>

    <div class="parkMap" style="text-align: center">
      <h2>Карта национального парка</h2>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A582984f8051202de0e860ac9f0824391a1849803f87aadca75fc04562db6fed3&amp;source=constructor"
        width="950"
        height="540"
        frameborder="0"
      ></iframe>
    </div>
  </div>

  <footer class="green">
    <div class="container">
      <div class="row">
        <div class="logo">
          <img src="../assets/img/icons/logo.png" alt="logo" />
          <h6>Природный парк "Ала-Арча"</h6>
        </div>
        <div class="navigation">
          <h6>Навигация</h6>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">История</a></li>
            <li><a href="#">Флора</a></li>
            <li><a href="#">Фауна</a></li>
            <li><a href="#">Волонтёры</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Въезд</a></li>
          </ul>
        </div>
        <div class="contacts">
          <h6>Контакты</h6>
          <ul>
            <li>
              Менеджер (PR-маркетинг) <br />
              +996 (700) 267 680
            </li>
            <br />
            <li>
              КПП (пункт пропуска) <br />
              +996 (312) 88 32 05
            </li>
            <br />
          </ul>
        </div>
        <div class="address">
          <h6>Адрес</h6>
          <ul>
            <li>
              Кыргызская Республика, Чуйская обл, Аламудунский р-н, село
              Кашка-Суу
            </li>
          </ul>
          <h6>Электронный адрес</h6>
          <ul>
            <li>ala-archa@list.ru</li>
          </ul>
        </div>
        <div class="social">
          <h6>Социальные сети</h6>
          <ul>
            <li><img src="img/icons/facebook.png" alt="" /></li>
            <li><img src="img/icons/instagram.png" alt="" /></li>
            <li><img src="img/icons/twitter.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "HomeView",
  data(){
    return{
      parallax: true,
    }
  },
  mounted(){
    setTimeout(() => this.parallax = false, 500);
  }
};
</script>

<style src="../assets/css/main.css"/>
<style src="../assets/css/parallax.css"/>
