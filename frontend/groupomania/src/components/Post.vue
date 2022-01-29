<template>
    <div>
        <div v-for="post in posts" v-bind:key="post.title">
            <div class="cardStyle shadow-sm mt-3 p-4">                
                    <div class="d-flex justify-content-between align-items-center">
                        
                        <p>Posted by: {{  }} </p>
                        
                        <div class="d-flex">
                            <i class="far fa-edit mr-4"></i>
                            <div @click="deletePost(post)"><i class="far fa-trash-alt"></i></div>
                        </div>
                    </div>  
                    <p class="text-start mt-2">{{ post.title }}</p>
                    <p class="text-start mt-2">{{ post.content }} </p>
                    <!-- <img class="photoPost" :src="image.source" :alt="image.alt"> -->
                    <div class="bottomIcons d-flex mt-4 justify-content-between">
                        <div>
                            <a href=""><i class="fas fa-heart "></i></a><span>50</span>
                            <a href=""><i class="fas fa-comments"></i></a><span>50</span>
                            <a href=""><i class="fas fa-share-alt"></i></a><span>50</span>
                        </div> 
                        <a href=""><i class="fas fa-bookmark"></i></a> 
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Post',
  data(){
      return{  
        userConnected: JSON.parse(sessionStorage.getItem("userInfo")),      
        posts:{}
      }
  },
    created: function(){
     this.getPosts()
  },
  methods:{
        async getPosts(){
            const infoUser = JSON.parse(sessionStorage.getItem("userInfo"))
            const token= infoUser.token
            const response = await axios.get('http://localhost:3000/api/posts/',{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            });
            console.log(response.data);
            this.posts = response.data;
        },
        deletePost(post) {
            let token = this.userConnected.token;
            axios.delete("http://localhost:3000/api/posts/" + post.id, {
                headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                console.log(res.data);
                alert("Post effacé");
                this.$router.go("/");
            });
        }
    }
}
</script>


<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.date{
    margin-left: 10px;
}
.roundPicture{
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}
.bottomIcons a, .bottomIcons span{
    margin-right: 8px;
    color:black;
}
.bottomIcons span{
    margin-right: 15px;;
}
.photoPost{
    width: 100%;
    max-height: 50vh;
    object-fit: contain;
}
.fa-edit{
    margin-right: 10px;
}

</style>