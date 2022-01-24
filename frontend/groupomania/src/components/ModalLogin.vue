<template>
        <!-- Modal Login -->
        <div class="modal fade" id="staticBackdrop01" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check d-flex justify-content-center">
                        <input type="checkbox" class="form-check-input checkinput" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary px-5 rounded-pill">Submit</button>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        
</template>

<script>
import axios from 'axios';
export default {
  name: 'ModalLogin',
  data(){
      return{
          email: '',
          password:''
      }
  },
    methods:{
      
      handleSubmit(){
          const data={
              email: this.email,
              password: this.password
        }
        console.log(data)

        axios.post('http://localhost:3000/api/auth/login', data)
            .then(res=>{
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token); 
            })
            .catch(err=>{
                console.log(err.message)
            })
               
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>