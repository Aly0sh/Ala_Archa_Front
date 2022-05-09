<template>
  <div @click.self="closeBooking" v-show="showModal" class="modal-shad">
	<div class="book-window">
		<h2>Бронирование</h2>
		<h3>Выберите даты</h3>
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
  </div>
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
			showModal: false,

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