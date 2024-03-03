
<script>
import {store} from '../store.js';
export default {
    name:'SingleProject',
    props:{
        project: Object
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        
    }
}
</script>

<template lang="">
<div class="col-4 d-flex justify-content-center my-2">
    <div class="card d-flex  w-75">
        <img :src=" project.mockup_image == null ? 'https://www.educattepeople.it/wp-content/uploads/2019/07/projectmanagementEDUCatt.jpg':`${store.baseUrl}/storage/${project.mockup_image}`" alt="" 
        class="card-img-top size_ align-self-center">
        <div class="my-2">
            <h4>
                <strong>Title:</strong> {{project.title}}
            </h4>
            <p><strong>Description:</strong> {{project.description}}</p>
            <p><strong>Relese Date:</strong> {{project.relese_date}}</p> 
           
            <div v-show=" project.technologies.length != 0 ">
            <strong>Technologies:</strong> 
                <ul class="list-unstyled d-flex">
                    <li v-for="( technologi, index ) in project.technologies" :key="index">
                        {{`- ${technologi.name}` }}
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.size_{
    width:200px;
}
    
</style>