
<script>
export default {
    name: 'HeaderProject',
}
</script>

<template lang="">
     <header class="color_header">
        <div class="container p-3 ">
            <div class="row d-flex  align-items-center">
               <img src="/public/logo.png" alt="" class="size_">
            </div>  
         </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as*;
@use '../style/general.scss' as*;

.color_header{
    background-color: rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
    .size_{
        width: 200px;   
    }
}

</style>