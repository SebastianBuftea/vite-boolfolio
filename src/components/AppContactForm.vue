
<script>
import {store} from '../store.js';
import axios from 'axios'; 
export default {
    name:'AppContactForm',
    data(){
        return{
            store,
            name:'',
            surname:'',
            email:'',
            phone:'',
            content:'',
        }
    },
    methods: {
        sendForm(){
            const data={
                name:this.name,
                surname:this.surname,
                email:this.email,
                phone:this.phone,
                content:this.content,
            }
            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response)=>{
            })
        }
    },
}
</script>

<template lang="">
    <div >
       <form @submit.prevent="sendForm()" method="POST">
            <div class="row text-white">

                <div class="col-6">
                    <label for="name" class="control-label">Nome</label>
                    <input type="text" placeholder="Nome" id="name" name="name" class="form-control" v-model="name" required>
                </div>

                <div class="col-6">
                    <label for="surname" class="control-label">Cognome</label>
                    <input type="text" placeholder="Cognome" id="surname" name="surname" class="form-control" v-model="surname" required>
                </div>

                <div class="col-6">
                    <label for="email" class="control-label">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" class="form-control" v-model="email" required>
                </div>

                <div class="col-6">
                    <label for="phone" class="control-label">Telefono</label>
                    <input type="text" placeholder="Telefono" id="phone" name="phone" class="form-control" v-model="phone" required>
                </div>

                <div class="col-12"> 
                    <label for="content" class="control-label">Messaggio</label>         
                    <textarea name="content" id="content" cols="30" rows="10" class="form-control" v-model="content" placeholder="Messaggio"></textarea>
                </div>

                <div class="col-12 mt-4">
                    <button class="btn btn-sm btn-success" type="submit">Invia</button>
                </div>

            </div>
       </form> 
    </div>
</template>

<style lang="scss" scoped>
    
</style>