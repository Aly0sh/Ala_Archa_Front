<template>
  <check-photo ref="checkPhoto"></check-photo>
  <div class="container">
        <div class="super-admin">
            <h2>Проверка оплаты залов</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Имя пользователя</th>
                    <th>Фото чека</th>
                    <th>Цена заказа</th>
                    <th class="accept">Принять</th>
                    <th class="deny">Отклонить</th>
                </tr>
                <tr v-for="(item, index) in roomOrders" :key="index">
                    <td>{{ item.userId }}</td>
                    <td>{{ item.userFullName }}</td>
                    <td><span @click="openModal(item.img)">Фото</span></td>
                    <td>{{ item.totalPrice }}</td>
                    <td class="accept"><a @click="accept(item.id)">Принять</a></td>
                    <td class="deny"><a @click="decline(item.id)">Отклонить</a></td>
                </tr>
            </table>
            <a href="/admin/show-admin-menu"><div class="back">
                    <p>Назад</p>
                </div></a>
        </div>
    </div>
</template>

<script>
import CheckPhoto from '../../components/CheckPhoto.vue'
import axios from 'axios';

export default {
    components: {
        CheckPhoto
    },
    data(){
        return{
            showModal: false,
            roomOrders: []
        }
    },
    methods: {
        openModal(photo){
            this.$refs.checkPhoto.photo = photo;
            this.$refs.checkPhoto.showModal = true;
        },
        accept(roomOrderId){
            axios
            .post('http://localhost:8083/hotelHall/order/' + roomOrderId + '/accept-pay',
                {
                    headers:{
                    Authorization:this.$store.getters.getToken,
                    }
                })
                .then((resp) => {
                    if (resp.status == 200) {
                        location.reload();
                    // this.$router.push("/");
                    }
                    console.log(this.$store.state);
                })
                .catch((error) => {
                    if (!error.response) {
                    this.$router.push("/error");
                    this.$store.commit("setError", error);
                    } else if (error.response.data.details === undefined) {
                    this.$router.push("/error");
                    this.$store.commit("setError", error);
                    } else {
                    this.signInErrorFlag = true;
                    this.signInErrorMessage = error.response.data.details;
                    console.log(error.response.data);
                    }
                });
        },

        decline(hotelHallId){
        console.log(hotelHallId)
        axios
        .post('http://localhost:8083/hotelHall/order/' + hotelHallId + '/decline',
              {
                headers:{
                  Authorization:this.$store.getters.getToken,
                }
              })
            .then((resp) => {
                if (resp.status == 200) {
                // this.$router.push("/");              
                    location.reload();
                }
                console.log(this.$store.state);
            })
            .catch((error) => {
                if (!error.response) {
                this.$router.push("/error");
                this.$store.commit("setError", error);
                } else if (error.response.data.details === undefined) {
                this.$router.push("/error");
                this.$store.commit("setError", error);
                } else {
                this.signInErrorFlag = true;
                this.signInErrorMessage = error.response.data.details;
                console.log(error.response.data);
                }
            });

      },
    },
    mounted() {
		axios
			.get('http://localhost:8083/hotelHall/order/get-in-pay-check')
			.then(response => {(this.roomOrders = response.data.value);
				console.log(response.data)
				})
			.catch(error => {
				console.log(error);
				this.errored = true;
			});
	},
}
</script>


<style src="../../assets/css/super.css"/>