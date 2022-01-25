<template>
  <div id="app">
    <div id="nav">   
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img :src="logoEntreprise.source" :alt="logoEntreprise.alt" height="30"></router-link>          
           
            <div v-if="userConnected"  class="d-flex align-items-center">
              <form class="d-flex">
                <input class="form-control me-2 rounded-pill" type="search" placeholder="Recherche" aria-label="Recherche">
              </form>
              <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
              <a class="nav-link" aria-current="page" href="javascript:void(0)" @click="handleLogout" >Logout</a>
              <div  class="dropdown text-end">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="images/profile.jpg" alt="mdo" width="32" height="32" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  <li><a class="dropdown-item" href="#">Profil</a></li>
                  <li><a class="dropdown-item" href="#">Configuration</a></li>
                  <li><a class="dropdown-item" href="#">Dark mode</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Log out</a></li>
                </ul>
              </div>
            </div> 
            <div v-else class="d-flex align-items-center">  
              <router-link class="nav-link" to="/login">Login</router-link>
              <router-link class="btn btn btn-primary rounded-pill px-4 mx-2" to="/signup">Signup</router-link> 
            </div>

          </div>
        </nav>

     </div>  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      userConnected: sessionStorage.getItem("userToken"), 
      logoEntreprise:{
          source: "/images/icon-left-font-monochrome-black copy.svg",
          alt: "logo groupomania"
      }
    }
  }, 
  methods:{
    handleLogout(){
      sessionStorage.removeItem("userToken");
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
i .fa, .bottomIcons i{
  color: #8a8a8a;
}
.fa-user-circle{
  font-size: 35px;
}
.fa-bell{
  font-size: 18px;
}
.inputsearch{
  width: 80%;
}
.rounded-circle{
  object-fit: cover;
}

</style>
