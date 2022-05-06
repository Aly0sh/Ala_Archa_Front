<template>
    <div class="prices">
    <h1>Прейскурант цен на въезд</h1>
    <p>Прейскурант цен Государственного учреждения  «Кыргызский государственный природный парк
        «Ала-Арча» при Управлении делами Президента и Правительства Кыргызской Республики
         на посещение объектов особо охраняемых природных территорий</p>

        <div class="rows"><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/moto.png" alt="">
                <h5 class="car-item-text">Мотоцикл<br><br><span class="car-item-text">200 C</span></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/laiba.png" alt="">
                <h5 class="car-item-text">Легковая машина<br><br><span class="car-item-text">500 C</span></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/furgon.png" alt="">
                <h5 class="car-item-text">Минивэн<br><br><span class="car-item-text">500 C</span></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/marsha.png" alt="">
                <h5 class="car-item-text">Микроавтобус<br><br><span class="car-item-text">1000 C</span></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/bus.png" alt="">
                <h5 class="car-item-text">Автобус<br><br><span class="car-item-text">2500 C</span></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/gruz.png" alt="">
                <h5 class="car-item-text">Грузовая машина<br><br><span class="car-item-text">500 C</span><img src="../assets/img/icons/info-circle.svg" class="circle-info" :title="'До 6 тонн'"/></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/gruz.png" alt="">
                <h5 class="car-item-text">Грузовая машина<br><br><span class="car-item-text">700 C</span><img src="../assets/img/icons/info-circle.svg" class="circle-info" :title="'От 6 до 10 тонн'"/></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/gruz.png" alt="">
                <h5 class="car-item-text">Грузовая машина<br><br><span class="car-item-text">1200 C</span><img src="../assets/img/icons/info-circle.svg" class="circle-info" :title="'От 10 до 20 тонн'"/></h5>
            </div><!--
-----------><div class="car-item">
                <img src="../assets/img/auto/gruz.png" alt="">
                <h5 class="car-item-text">Грузовая машина<br><br><span class="car-item-text">1500 C</span><img src="../assets/img/icons/info-circle.svg" class="circle-info" :title="'Свыше 20 тонн'"/></h5>
            </div>
        </div>

        <div class="container">
            <hr>
        </div>

</div>



<div class="container">
    <div class="info">

        <div class="information-text inline">
            <h5 class="notes-title-text">Примечания:</h5>

            <h6 class="notes-subtitle-text">Вход посетителей без наличия автотранспортных средств бесплатный</h6>

            <div class="notes-item clear">
                <img src="../assets/img/icons/info-circle.svg"/>
                <div class="notes-text">Оплата взимается только за автотранспортное средство вне зависимости от количества людей.
                </div>
            </div>

            <div class="notes-item clear">
                <img src="../assets/img/icons/info-circle.svg"/>
                <div class="notes-text">Проезд для жителей Байтикского айыл-окмоту, участникам ВОВ и Афганской войны при наличии регистрации в базе данных по льготным спискам КПП бесплатно.
                </div>
            </div>

            <div class="notes-item clear">
                <img src="../assets/img/icons/info-circle.svg"/>
                <div class="notes-text">В целях избежания браконьерства, пожарной безопасности и соблюдения санитарных норм на территории парка необходимо досматривать на КПП въезжающие автомобили на предмет наличия оружия и удочек.
                </div>
            </div>
            <img src="../assets/img/icons/flower.png" width="30%" alt="">
        </div><!--
-------><div class="formbox inline">
            <h5 class="notes-title-text">Обратная связь:</h5>
            <form class="mb-form">
    
              <label for="fname" class="notes-text-label">Имя</label>
              <input type="text" id="fname" name="firstname" class="input-text-auto" placeholder="Имя">
              <label for="email" class="notes-text-label">Почта</label>
              <input type="text" id="email" name="email" class="input-text-auto" placeholder="Почта">
              <label for="subject" class="notes-text-label">Введите ваше сообщение</label>
              <textarea id="subject" name="subject" class="input-text-auto" placeholder="Напишите ваше сообщение.." style="height:calc(12vw + 10px)"></textarea>
              <input type="submit"  value="Отправить" class="input-text-auto">
              <img src="../assets/img/icons/flower.png" width="30%" alt="">
            </form>
        </div>
    </div>
</div>

		<footer class="green">
		<div class="container">
			<div class="row">
				<div class="logo">
					<img src="../assets/img/icons/logo.png" alt="logo">
					<h6>Природный парк "Ала-Арча"</h6>
				</div>
				<div class="navigation">
					<h6>Навигация</h6>
					<ul>
						<li><a href="/">Главная</a></li>
						<li><a href="/about-us">История</a></li>
						<li><a href="/flora">Флора</a></li>
						<li><a href="/fauna">Фауна</a></li>
						<li><a href="/services">Услуги</a></li>
						<li><a href="/entry">Въезд</a></li>
					</ul>
				</div>
				<div class="contacts">
					<h6>Контакты</h6>
					<ul>
						<li>Менеджер (PR-маркетинг) <br>
							+996 (700) 267 680
						</li>
						<br>
						<li>КПП (пункт пропуска) <br>
							+996 (312) 88 32 05
						</li>
						<br>
					</ul>
				</div>
				<div class="address">
					<h6>Адрес</h6>
					<ul>
						<li>Кыргызская Республика,
							Чуйская обл, Аламудунский р-н, село Кашка-Суу
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
						<li><img src="../assets/img/icons/facebook.png" alt=""></li>
						<li><img src="../assets/img/icons/instagram.png" alt=""></li>
						<li><img src="../assets/img/icons/twitter.png" alt=""></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {

}
</script>

<style src="../assets/css/styles.css"></style>