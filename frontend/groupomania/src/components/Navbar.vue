<template>
    <div id="nav">   
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
              <img :src="logoEntreprise.source" :alt="logoEntreprise.alt" height="30">
            </router-link>          
           
            <div class="d-flex align-items-center">
              <form class="d-flex">
                <input class="form-control me-2 rounded-pill" type="search" placeholder="Recherche" aria-label="Recherche">
              </form>
              <a class="nav-link" href="#"><i class="fas fa-bell"></i></a>
              <a class="nav-link" aria-current="page" href="" @click="handleLogout" >Logout</a>
              <div  class="dropdown text-end">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="images/profile.jpg" alt="imageprofil" width="32" height="32" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                  <li><router-link class="dropdown-item" to="/profile">Profil</router-link></li>
                  <li><a class="dropdown-item" href="#">Configuration</a></li>
                  <li><a class="dropdown-item" href="#">Dark mode</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="" @click="handleLogout">Logout</a></li>
                </ul>
              </div>
            </div> 
          </div>
        </nav>
    </div> 
</template>

<script>

export default {
  name: 'Navbar',
  data(){
    return{
       logoEntreprise:{
          source: "/images/icon-left-font-monochrome-black copy.svg",
          alt: "logo groupomania"
      }
    }
  },
    methods:{
    handleLogout(){
      sessionStorage.removeItem("userInfo");
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
