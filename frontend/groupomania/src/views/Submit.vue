<template>
  <div v-if="userConnected"> 
      <Navbar/> 
      <div  class="row container-fluid mx-auto px-0">
      <Form/>
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
// @ is an alias to /src
import Form from '@/components/Form.vue'
import Popular from '@/components/Popular.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Submit',
  components: {
    Form,
    Popular,
    Navbar
  },
  data(){
    return{
      userConnected: sessionStorage.getItem("userToken"),
    }   
  }
  
}
</script>