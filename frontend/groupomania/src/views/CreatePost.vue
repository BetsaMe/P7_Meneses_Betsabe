<template>
  <div v-if="userConnected"> 
      <Navbar/> 
      <div  class="row container-fluid mx-auto px-0">
          <div class="col-lg-8">
            <form @submit.prevent="sendPost">
                <div class="headerFeed shadow-sm p-3 mt-3">
                    <h3 class="m-0 pb-3">Créer une publication</h3>
                    <div class="mb-3 ">
                        <label for="formTitle" class="form-label text-left ">Titre</label>
                        <input v-model="newPost.title" type="title" class="form-control" id="formTitle" placeholder="">
                    </div>
                    <!-- <div class="mb-3">
                        <label for="formFile" class="form-label">Ajouter à votre publication</label>
                        <input class="form-control" type="file" id="formFile">
                    </div> -->
                    <div class="mb-3">
                        <label for="formTextarea" class="form-label">Contenu</label>
                        <textarea v-model="newPost.content" class="form-control" id="formContent" rows="3" placeholder=""></textarea>
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary">Publier</button>
                    </div>
                </div> 
            </form>
          </div>  
          <div class="col-lg-4 color mt-3">
              <div class="populaires shadow-sm p-2">
                <h4 class="text-center">Les + populaires</h4>                     
                <Popular src="/images/meme.jpg" alt="meme" text="Funny" btnname="suivre"/>                    
                <Popular src="/images/cats.jpg" alt="cats" text="Animaux" btnname="suivre"/>                    
                <Popular src="/images/wtf.jpg" alt="wtf" text="Blagues" btnname="suivre"/>
            </div> 
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import Popular from '@/components/Popular.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'CreatePost',
  components: {
    Popular,
    Navbar
  },
  data(){
      return{
        userConnected: null,
        newPost: {
            title: "",
            content: ""
        },
          errors:[],
          validFormat: /^[a-zA-Z]{2,10}$/,
          validFormatEmail: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
      }
  },
  created: function(){
     this.userConnected= JSON.parse(sessionStorage.getItem("userInfo"))
  },
  methods:{
      async sendPost(){
        const token = this.userConnected.token
        this.userId= this.userConnected.userId
        const response= await axios.post('http://localhost:3000/api/posts/', this.newPost,{
            headers:{
                Authorization: 'Bearer ' + token
            }
        });
        console.log(response , this.userId)
        window.location.href = "http://localhost:8080/";              
    }, 
  }
  
}
</script>