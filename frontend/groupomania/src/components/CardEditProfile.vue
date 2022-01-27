<template>
  <div id="editProfil" class="container-fluid">
        <form class="row g-3 headerFeed shadow-sm p-3" @submit.prevent="editUser">
            <div class=" d-flex flex-column  mt-3 justify-content-center align-items-center text-center">          
                <img class="rounded-circle mt-5" src="images/profile.jpg" width="150" height="150">
                <h1 class="font-weight-bold">Information de compte</h1>            
            </div>
            <div class="col-md-6">
                <label for="validationDefaultUsername" class="form-label">Pseudo</label>
                <div class="input-group">
                <span class="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-control" v-model="pseudo" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" >
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationDefault01" class="form-label">First name</label>
                <input type="text" class="form-control" v-model="firstName" id="validationDefault01" value="Mark" >
            </div>
            <div class="col-md-6">
                <label for="validationDefault02" class="form-label">Last name</label>
                <input type="text" class="form-control" v-model="lastName" id="validationDefault02" value="Otto" >
            </div>
<!--  
            <div class="col-md-6">
                <label for="validationDefault05" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" id="validationDefault05" >
            </div> -->
            <div class="col-md-6">
                <label for="validationDefault05" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" v-model="password" id="password" name="password" >
            </div>
            <div class="col-12">
                <button class="btn btn-primary my-3" type="submit">Enregistrer</button>
            </div>
        </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CardEditProfile',
  data(){
      return{
          pseudo: '',
          firstName:'',
          lastName:'',
          password:''
      }
  },
  methods:{       
        async editUser(){           
            const infoUser = JSON.parse(sessionStorage.getItem("userInfo"))
            await axios.put('http://localhost:3000/api/auth/' + infoUser.userId,{
                pseudo: this.pseudo,
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password
            });
            console.log(this.password)
            this.$router.push('/profile');
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
