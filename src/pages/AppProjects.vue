
<script>

import SingleProject from "../components/SingleProject.vue";
import { store } from '../store.js';
import axios from 'axios'; 

export default {
    name:'AppProjects',
    components:{
        SingleProject
    },
    data() {
        return {
            store,
            projects:[],
            currentPage:1,
            lastPage: null,
        }
    },
    created(){
        this.getProjects();
    },
    methods:{
        getProjects(page_number){
            axios.get(`${this.store.baseUrl}/api/projects`,{
                params:{
                    page:page_number
                }
            }).then((response)=>{
                this.projects=response.data.results.data;
                this.currentPage=response.data.results.current_page
                this.lastPage=response.data.results.last_page
            })
        }
    }
}
</script>

<template lang="">
    <div class="container my-3">
        <div class="row bg-white mb-2 rounded border border-warning">
            <div class="col-12 d-flex flex-wrap mb-3">
            
                <SingleProject v-for="project, index in projects" :key="index" :project="project"/>
            </div>
         </div>
        <div class="row">   
            <div class="col-12">
                <ul class="pagination d-flex justify-content-center">
                    <li :class="currentPage == 1 ?  'disabled': ''">
                        <button type="" :class="currentPage == 1 ?  'disabled': ''" class="btn btn-outline-warning  btn-square" @click="getProjects(currentPage - 1)">Precedente</button>
                    </li>
                    <li :class="currentPage == lastPage ?  'disabled': ''">
                        <button type="" :class="currentPage == lastPage ?  'disabled': ''" class="btn btn-outline-warning  btn-square" @click="getProjects(currentPage + 1)">Successiva</button>
                    </li> 
                </ul> 
            </div>
        </div>
        
    </div>
    
</template>

<style lang="scss">
@use '../style/general.scss' as*;
@use '../style/partials/variables' as*;   
</style>./projects.vue/index.js