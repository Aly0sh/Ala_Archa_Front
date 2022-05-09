<template>
  <div @click.self="closeBooking" v-show="showModal" class="modal-shad">
	<div class="book-window">
		<h2>Бронирование</h2>
		<h3>Выберите даты</h3>
		<div class="date-picker">
			<Datepicker 
				v-model="date" 
				range 
				inline 
				autoApply 
				:min-date="new Date()" 
				:disabledDates="disabledDates"
				:enableTimePicker="false"
				>
			</Datepicker>
		</div>
		<select id="selector">
			<option value="">Тапчан 1</option>
			<option value="">Тапчан 2</option>
			<option value="">Тапчан 3</option>
		</select>
		<span style="display: block; margin-bottom: 1vw;" class="validation">Дата 14.05.2022 занята</span>
		<button class="datepicker-book">Забронировать</button>
	</div>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';


export default {
	components: {
		Datepicker
	},
    data() {
        return {
			date: '',
			showModal: false
        }
    },
    methods: {
        closeBooking(){
            this.showModal = false;
        }
    }        
}
</script>

<style>

</style>