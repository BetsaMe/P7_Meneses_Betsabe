<template>
    <main>
        <div class="row container-fluid mx-auto px-0">
            <div class="col-lg-8">
                 <div class="headerFeed d-flex shadow-sm mt-3 p-3 justify-content-between">
                    <div>
                        <h2>Tes publications</h2>
                    </div>
                    <router-link class="btn btn btn-primary ml-4 px-4 rounded-pill btnPublication" to="/submit">Publier</router-link>
                </div> 
                
                <div class="feed">
                    <Post
                        v-for="post in posts"
                        :date="post.date"
                        :text="post.text"
                        :image="post.image"
                        :likes="post.likes"
                        :comments="post.comments"
                        :shares="post.shares"
                        :key="post.name"                        
                    />
                </div>

            </div>
            <div class="col-lg-4 color mt-3">
                 <div class="populaires shadow-sm p-2">
                    <h4 class="text-center">Tes informations</h4>
                    <p>Prénom:</p>
                    <p>Nom:</p>
                    <p>Addres email:</p>
                    <p>Mot de passe:</p>
                    <a href="">Modifier profile</a>
                </div> 
            </div>            
        </div>   

    </main>  
</template>

<script>
// @ is an alias to /src
// import axios from 'axios';
import Post from '@/components/Post.vue'

export default {
  name: 'Profile',
  components: {
    Post
  },
  data(){
    return{
      userConnected: sessionStorage.getItem("userToken"), 
      posts:[
            {
            name: "post1",    
            date: "2015-03-25",
            text: "the funniest post",
            author: {
                photo: "/images/meme.jpg"
            },
            image:{
                source:"/images/meme.jpg",
                alt: "Un meme"                 
            },
            likes: 1250,
            comments: 175,
            shares: 100
            }
        ]
    }
  }
}
</script>


<style>
*{
    box-sizing: border-box;
}
body{
    width: 100%;
    background-color: #F3F3F9;
    font-family: 'Poppins', sans-serif;
    color: rgb(33, 34, 33);
    font-size: 15px;
}
nav{
    background-color: #fff;   
    box-shadow: 0px 5px 21px -5px #cdd1e1;
    margin-bottom: 30px;
}
.container-fluid{
    width: 70%;
}
.headerFeed, .cardStyle,  .populaires{
    background-color: #fff;
    border-radius: 5px;
}

.cardStyle .photoPost{   
    object-fit: contain;
}
.btnPublication{
    width: 30%;
    height: 40px;
}


@media only screen and (max-width: 1024px){
    .container-fluid{
        width: 100%;
    }
    
}
@media only screen and (max-width: 992px){
    .form-control {
        width: 100%;
    }
    
}

</style>
