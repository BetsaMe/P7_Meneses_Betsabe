<template>
  <div>  
      <form class="form-signin text-center" @submit.prevent="handleSubmit">
          <img class="mb-4" src="/images/icon-rec.png" alt="" width="72">
          <h1 class="h3 mb-3 fw-normal">Login</h1>

          <div class="form-floating">
            <input type="email" class="form-control" v-model="email" id="email" placeholder="email@example.com">
            <label for="floatingInput">Addres email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" v-model="password" id="password" placeholder="mot de passe">
            <label for="floatingPassword">Mot de passe</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>    
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  components: {
    
  },
  data(){
      return{
          email: '',
          password:''
      }
  },
    methods:{
      
      async handleSubmit(){  

       const response = await axios.post('http://localhost:3000/api/auth/login', {         
            email: this.email,
            password: this.password
       });
        let userInfo= JSON.stringify(response.data);
        sessionStorage.setItem("userInfo", userInfo);
        console.log(userInfo)
        this.$router.push('/');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
      .form-signin{
        width:100%;
        max-width: 350px;
        margin: auto;
      }
        .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>