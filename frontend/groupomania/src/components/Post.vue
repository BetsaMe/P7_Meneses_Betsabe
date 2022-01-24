<template>
    <div class="cardStyle shadow-sm mt-3 p-4">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <a class="" href="#"><img class="roundPicture" :src="image.source" alt="user"></a>
                 <span class="date">{{ date }}</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </div>  
        <p class="text-start mt-2">{{ text }} </p>
        <img class="photoPost" :src="image.source" :alt="image.alt">
        <div class="bottomIcons d-flex mt-4 justify-content-between">
            <div>
                <a href=""><i class="fas fa-heart "></i></a><span>{{ likes}}</span>
                <a href=""><i class="fas fa-comments"></i></a><span>{{ comments }}</span>
                <a href=""><i class="fas fa-share-alt"></i></a><span>{{ shares }}</span>
            </div> 
            <a href=""><i class="fas fa-bookmark"></i></a> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    name: {
        type: String
    },  
    image: {
        type: Object
    },
    text: {
        type: String
    },
    date: {
        type: String
    },
    author:{
        type: Object
    },
     likes:{
        type: Number
    },
     comments:{
        type: Number
    },
     shares:{
        type: Number
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

</style>