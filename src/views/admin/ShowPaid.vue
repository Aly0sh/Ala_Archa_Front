<template>
<check-photo ref="checkPhoto"></check-photo>
  <div class="container">
        <div class="super-admin">
            <h2>Проверка оплаты</h2>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>Имя пользователя</th>
                    <th>Электронная почта пользователя</th>
                    <th>Фото чека</th>
                    <th class="accept">Принять</th>
                    <th class="deny">Отклонить</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Бекжан</td>
                    <td>Почта</td>
                    <td><span @click="openModal('hello')">Фото</span></td>
                    <td class="accept"><a @click="accept(hall_book.id)">Принять</a></td>
                    <td class="deny"><a @click="decline(hall_book.id)">Отклонить</a></td>
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

export default {
    components: {
        CheckPhoto
    },
    data(){
        return{
            showModal: false,
        }
    },
    methods: {
        openModal(photo){
            this.$refs.checkPhoto.photo = photo;
            this.$refs.checkPhoto.showModal = true;
        }
    }
}
</script>


<style src="../../assets/css/super.css"/>