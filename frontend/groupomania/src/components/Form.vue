<template>  
    <div class="col-lg-8">
        <div class="headerFeed shadow-sm p-3 mt-3">
            <h3 class="m-0 pb-3">Créer une publication</h3>
            <div class="mb-3 ">
                <label for="formTitle" class="form-label text-left ">Titre</label>
                <input type="title" class="form-control" id="formTitle" placeholder="De quoi il s'agit?">
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Ajouter à votre publication</label>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="mb-3">
                <label for="formTextarea" class="form-label">Commentaire</label>
                <textarea class="form-control" id="formTextarea" rows="3" placeholder="Quoi de neuf?"></textarea>
            </div>
            <div class="">
                <button type="submit" class="btn btn-primary">Publier</button>
            </div>
        </div> 
    </div>          

</template>

<script>
export default {
  name: 'Form',
  props:{
  }
}
</script>


<style >

</style>
