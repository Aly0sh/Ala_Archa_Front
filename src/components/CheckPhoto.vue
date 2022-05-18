<template>
    <div v-if="showModal" @click.self="showModal = false" class="check_photo_shadow">
        <img src="../assets/img/hotel/room-type-1.png" class="check_photo"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showModal: false,
            photo: ''
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>