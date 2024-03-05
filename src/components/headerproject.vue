
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
            <div class="row d-flex justify-content-between">
               <img src="../assets/logo.png" alt="" class="size_">
                <ul class="list-unstyled list-inline w-25 m-0 d-flex justify-content-end ">
                    <li v-for="item, index in store.menuItems" :key="index" class="list-inline-item align-self-center">
                       <strong>
                            <router-link :to="{name: item.name}"
                            class="link-offset-2 link-underline link-underline-opacity-0  mx-2 change-color">
                                {{item.label}}
                            </router-link>
                        </strong>
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
    .size_{
        width: 200px;   
    }
    .change-color{
        color: black;
        
        &:hover{
            color: rgb(255, 149, 0);
        }
    }
}

</style>