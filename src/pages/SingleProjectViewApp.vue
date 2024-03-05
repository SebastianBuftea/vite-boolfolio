
<script>
import {store} from '../store.js'
import axios from 'axios'; 
export default {
    name: 'SingleProjectViewApp',
    data(){
        return{
            store,
            project:null,
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response)=>{
                 this.project=response.data.project 
            })
        }
    },
    
}
</script>
<template lang="">
    <div v-if="project != null">
        <div class="container my-3">
            <div class="row bg-white mb-2 rounded border border-warning  d-flex justify-content-center ">
                <div class=" w-75 h-100  bg-warning p-2 border border-warning-subtle m-3 d-flex">
                    <div class="w-50">
                        <img :src=" project.mockup_image == null ? 'https://www.educattepeople.it/wp-content/uploads/2019/07/projectmanagementEDUCatt.jpg':`${store.baseUrl}/storage/${project.mockup_image}`" alt="" 
                        class="card-img-top size_ ">
                    </div>
                    <div class="my-2 w-50">
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
                        <div v-if=" project.type!= null ">
                        <strong>Type</strong> 
                            <p>{{project.type.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
     
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .size_{
    width:400px;
}
</style>