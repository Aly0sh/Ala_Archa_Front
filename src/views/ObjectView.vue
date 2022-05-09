<template>
	<br>
	<div class="container">
		<div class="topchan-head">
			<h2 class="topchan-head-title">Топчаны</h2>
			<div class="clear"></div>
			<img src="../assets/img/objects/object1.png" class="topchan-head-img1" alt="">
			<img src="../assets/img/objects/object2.png" class="topchan-head-img2" alt="">
		</div>

		<h1 class="mobile-obj-title">Топчаны</h1>

		<DateRangeBookingObject ref="objectModal"></DateRangeBookingObject>


		<div class="topchan-body">
			<img class="topchan-body-img" src="../assets/img/objects/object3.png" alt="">
			<div class="topchan-body-content">
				<p class="topchan-body-content-text">Местоположение: </p>
				<p class="topchan-body-content-text">Цена: </p>
				<p class="topchan-body-content-text">Вместимость: </p>
				<p class="topchan-body-content-text">Доп услуги: </p>
				<button @click="$refs.objectModal.showModal = true" class="topchan-body-content-button">ЗАБРОНИРОВАТЬ</button>
			</div>
		</div>


		<div class="topchan-slider">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" style="margin-right: 0;" alt="">
		</div>
		<div class="clear"></div>
		<button @click="$refs.objectModal.showModal = true" class="topchan-button">Бронировать</button>
	</div>

	<h3 class="object-menu-head">Меню услуг</h3>

	<div class="object-menu">
		<h5>Представление посуды и тд</h5>
		<div>
			<h6>Посуда и столовые приборы</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>10 чел, 4 часа</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Казан</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 шт, 4 часа</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Мангал</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 шт, 4 часа</p>
			<div class="clear"></div>
		</div>

		<h5>Предоставление места</h5>
		<div>
			<h6>Кухня</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>10 чел, 4 часа</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Услуги готовки</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 порция</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Очаг с казаном</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 место, 1 час</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Камера хранения</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 шт, 1 сутки</p>
			<div class="clear"></div>
		</div>
		<div>
			<h6>Услуги туалета</h6>
			<span>200c</span>
			<div class="clear"></div>
			<p>1 шт, 1 сутки</p>
			<div class="clear"></div>
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
import DateRangeBookingObject from "../components/DateRangeBookingObject.vue"

export default {
	components: {
		DateRangeBookingObject
	}
}
</script>

<style src="../assets/css/all.css"/>