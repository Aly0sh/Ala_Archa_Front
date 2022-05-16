<template>
	<div class="container">
		<div class="cart-row">
			<div class="trash">
				<h1>Корзина</h1>
				<div v-for="(item, index) in cartItems" :key="index">
					<hr>
					<div class="trash-row">
						<div class="left">
							<div class="trash-picture">
								<img :src="item.img">
							</div>
							<div class="trash-text">
								<h4 v-if="item.roomType">{{ item.roomType }}</h4>
								<h4 v-if="item.objectType">{{ item.objectType }}</h4>
								<h4 v-if="item.hotelHallName">{{ item.hotelHallName }}</h4>
								<span>{{ item.price }} сом</span>

								<br>

								<p v-if="item.days">Количество суток:</p>
								<input v-if="item.days" type="number" :value="item.days" min="1" max="90" disabled>
								
								<p v-if="item.hours">Количество часов:</p>
								<input v-if="item.hours" type="number" :value="item.hours" min="1" max="90" disabled>

								<h3 v-if="item.roomNumber">Номер комнаты: {{ item.roomNumber }}</h3>
								<h3 v-if="item.name">{{ item.name }}</h3>
							</div>
						</div>
						<div class="right">
							<div class="trash-status">
								<h5>{{ item.totalPrice }} сом</h5>
								<br><br><br><br><br>
								<span v-if="item.orderStatus == 'CONFIRMED'">Принято</span>
								<span v-else-if="item.orderStatus == 'DECLINED'" style="color: red;">Отклонено</span>
								<span v-else>Оплачено</span>
							</div>
							<div class="row">
								<div class="photo-upload">
									<form>
										<input @change="handleImage" type="file" id="img" name="img" accept="image/*"
											hidden>
										<label for="img">Оплатить</label>
									</form>
								</div>
								<!-- <div v-if="cart.img" class="getImage">
									<img class="uploaded-image" :src="cart.img" alt="aa">
								</div> -->
							</div>
						</div>

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
				<br>
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
import axios from 'axios';

export default {	
	data() {
		return {
			trash: [],
			cartItems: []
		}
	},
	mounted() {
		axios
			.get('http://localhost:8083/user/get/my-orders/' + this.$store.getters.getId)
			.then(response => {(this.trash = response.data.value);
				console.log(response.data)
				for (let i in this.trash){
					this.cartItems = this.cartItems.concat(this.trash[i])
				}
				this.cartItems = this.cartItems.splice(1);
				})
			.catch(error => {
				console.log(error);
				this.errored = true;
			});
	},
	watch: {
		
	}
}

</script>







<style src="../assets/css/all.css"/>