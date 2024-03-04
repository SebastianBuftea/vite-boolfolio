
<script>
import {store} from '../store.js';
export default {
    name: 'HeaderProject',
    data(){
        return{
            store,
        }
    },
}
</script>

<template lang="">
     <header class="color_header">
        <div class="container p-3 ">
            <div class="row d-flex  justify-content-between">
               <img src="../assets/logo.png" alt="" class="size_">
                <ul class="list-unstyled d-flex align-items-center text-dark w-25 align-self-middle">
                    <li v-for="item, index in store.menuItems" :key="index" >
                        <router-link :to="{name: item.name}">{{item.label}}</router-link>
                    </li>
                </ul>
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
    ul{
        color: black;
    }
}

</style>