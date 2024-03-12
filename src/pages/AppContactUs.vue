
<script>
import AppContactForm from '../components/AppContactForm.vue';
export default {
    name:'AppContactUs',
    components:{
        AppContactForm,
    },
    
    
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-white">
                    <div class="h1 my-5 text-center">
                        Contatti
                    </div>
                </div>
                <div class="col-12">
                    <AppContactForm/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    
</style>