<template>
	<div class="container">
		<div class="cart-row">
			<div class="trash">
			<h1>Корзина</h1>
			<hr>
			<div class="trash-row">
				<div class="left">
				<div class="trash-picture">
					<img src="../assets/img/objects/object1.png">
				</div>
				<div class="trash-text">
					<h4>Стандарт</h4>
					<span>2500сом</span>

					<br>

					<p>Количество суток:</p>
					<input type="number" value="1" min="1" max="90" disabled>

					<h3>Номер комнаты: 2</h3>
				</div>
				</div>
				<div class="right">
				<div class="trash-status">
					<h5>2500 сом</h5>
					<span>Принято</span>
				</div>
				</div>
				
			</div>

			<hr>

			<div class="trash-row">
				<div class="trash-picture">
					<img src="../assets/img/objects/object1.png">
				</div>
				<div class="trash-text">
					<h4>Стандарт</h4>
					<span>2500сом</span>

					<br>

					<p>Количество суток:</p>
					<input type="number" value="1" min="1" max="90" disabled>

					<h3>Номер комнаты: 2</h3>
				</div>
				<div class="trash-status">
					<h5>2500 сом</h5>
					<br><br><br><br><br>
					<span style="color: red;">Отклонено</span>
				</div>
				
			</div>
			</div>
			<div class="payment">
				<h1>Покупка онлайн</h1>
				<h4>Номер карты</h4>
				<span>Переведите средства на данную карту</span>
				<h3>4444 - 4444 - 4444 - 4444</h3>
				<div class="cards">
					<img src="../assets/img/icons/visa.png" alt="" class="card">
					<img src="../assets/img/icons/mastercard.png" alt="" class="card">
				</div>
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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
	components: {
		Datepicker
	},
    data() {
        return {
			date: '',

        }
    },        
}

</script>


<style src="../assets/css/all.css"/>