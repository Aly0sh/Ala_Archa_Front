<template>
    <div class="hotel-block">
		<img class="hotel-img" :src="hotel.imgUrl" alt="">
		<h1 class="hotel-name">{{ hotel.hotelName }}</h1>
	</div>

	<DateRangeBooking ref="dateRange"></DateRangeBooking>

	<!-- <div class="room-types">
		<h3 class="select-room-text">Выберите подходящий номер для себя:</h3>
		<div class="room-types-items">
			<div class="room-type-item">
				<img src="images/room-type-1.png" class="room-type-img" alt="">
				<h3 class="room-type-text">2500 с<br>Стандарт</h3>
			</div>
			<div class="room-type-item">
				<img src="images/room-type-2.png" class="room-type-img" alt="">
				<h3 class="room-type-text">3000 с<br>Полулюкс</h3>
			</div>
			<div class="room-type-item">
				<img src="images/room-type-3.png" class="room-type-img" alt="">
				<h3 class="room-type-text">4000 с<br>Семейный</h3>
			</div>
			<div class="room-type-item">
				<img src="images/room-type-4.png" class="room-type-img" alt="">
				<h3 class="room-type-text">7000 с<br>Люкс</h3>
			</div>
		</div>
	</div> -->

	<div class="room" v-for="(roomType, i) in hotel.roomTypeModels" :key="i">
		<div class="topchan-body">
			<img class="topchan-body-img" src="../assets/img/objects/object3.png" alt="">
			<div class="topchan-body-content">
				<h3>{{ roomType.type }}</h3>
				<p class="topchan-body-content-text">Зона: {{hotel.areaName}}</p>
				<p class="topchan-body-content-text">Цена: {{roomType.price}} сом</p>
				<!-- <p class="topchan-body-content-text">Вместимость: </p>
				<p class="topchan-body-content-text">Доп услуги: </p> -->
			</div>
		</div>

		<div class="room-slider">
			<img src="../assets/img/objects/object1.png" class="room-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="room-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="room-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="room-slider-img" style="margin-right: 0;" alt="">
		</div>
		<div class="topchan-slider">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" alt="">
			<img src="../assets/img/objects/object1.png" class="topchan-slider-img" style="margin-right: 0;" alt="">
		</div>
		<div class="clear"></div>
		<button @click="$refs.dateRange.showModal = true" class="hotel-body-content-button">ЗАБРОНИРОВАТЬ</button>
		<button @click="$refs.dateRange.showModal = true" class="topchan-button">Бронировать</button>
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
import DateRangeBooking from '../components/DateRangeBooking.vue'
import TimeBookingObject from '../components/TimeBookingObject.vue'
import axios from 'axios';


export default {
	data(){
		return{
			hotelId: null,
			hotel: null
		}
	},
	components:{
    	DateRangeBooking, TimeBookingObject
	},
	created() {
		this.hotelId = this.$route.params.id;
		axios
		.get('http://localhost:8083/hotel/get/' + this.hotelId)
		.then(response => {(this.hotel = response.data.value);
		console.log(response.data)})
		.catch(error => {
			console.log(error);
			this.errored = true;
		});
	}
	      
}

</script>


<style src="../assets/css/all.css"/>