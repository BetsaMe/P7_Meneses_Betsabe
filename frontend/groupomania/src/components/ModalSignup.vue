<template>
        <!-- Modal Signup -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Signup</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="inputname" class="form-label">Nom</label>
                        <input type="name" class="form-control" v-model="lastName" id="inputname" aria-describedby="name">
                    </div>
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="inputname" class="form-label">Prénom</label>
                        <input type="name" class="form-control" v-model="firstName" id="inputname" aria-describedby="name">
                    </div>
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="exampleInputEmail1" class="form-label">Addres email</label>
                        <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 d-flex flex-column align-items-center">
                        <label for="exampleInputPassword1" class="form-label" >Mot de passe</label>
                        <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check d-flex justify-content-center">
                        <input type="checkbox" class="form-check-input checkinput" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary px-5 rounded-pill">Submit</button>
                    <div class="social-icons mt-4">
                        <ul class="d-flex justify-content-center">
                            <li class="mx-3"><a href="#"><i class="fab fa-google"></i></a></li>
                            <li class="mx-3"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="mx-3"><a href="#"><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
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
  name: 'ModalSignup',
  data(){
      return{
          firstName: '',
          lastName: '',
          email: '',
          password:''
      }
  },
  methods:{
      
      handleSubmit(){
          const data={
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password
          }
        console.log(data)

        axios.post('http://localhost:3000/api/auth/signup', data)
            .then(res=>{
                console.log(res)
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
.checkinput{
    margin-right: 15px;
}
.social-icons i{
    font-size: 20px;
}
</style>