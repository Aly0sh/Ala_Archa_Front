<template>
    <div class="container">
		<div class="services-head">
			<img class="services-head-img" :src="getImgUrl(currentServicesSlide)" alt="">
			<h1 class="services-head-title" style="line-height: normal">Открой для<br>себя <span>Ала-арчу</span></h1>
			<img :src="getImgUrl(slidesHead[3])" @click="clickToHead(slidesHead[3], 3)" class="services-head-f" alt="">
			<img :src="getImgUrl(slidesHead[1])" @click="clickToHead(slidesHead[1], 1)" class="services-head-s" alt="">
			<img :src="getImgUrl(slidesHead[2])" @click="clickToHead(slidesHead[2], 2)" class="services-head-t" alt="">
			<img :src="getImgUrl(slidesHead[0])" @click="clickToHead(slidesHead[0], 0)" class="services-head-fr" alt="">
		</div>

		<div class="hotels-title">
				Гостиницы
		</div>
		<div class="hotels">
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
		</div>

		<div class="obj-title">
			Рекомендуем посетить
		</div>
		<div class="hotels">
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
			</div>
			<div class="services-card">
				<img src="../assets/img/services/services.png" alt="">
				<h3>Гостиница "Ала-Арча"</h3>
				<p>от 2500 с</p>
				<button class="services-learn-more">Узнать подробнее</button>
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
	data(){
		return{
			currentServicesSlide: 'services',
			slidesHead: [
				'services-1',
				'services-2',
				'services-3',
				'services-4'
			]
		}
	},
	methods: {
		getImgUrl(image) {
    		return require(`../assets/img/services/${image}.png`)
  		},

		clickToHead(image, number){
			this.slidesHead[number] = this.currentServicesSlide;
			this.currentServicesSlide = image;
		}
	}
}
</script>


<style src="../assets/css/all.css"/>