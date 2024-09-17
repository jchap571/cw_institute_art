<script setup>
import { AppState } from "@/AppState.js";
import { artworkService } from "@/services/ArtworkService.js";
import Pop from "@/utils/Pop.js";
import { onMounted, computed } from "vue";


const artworks = computed(() => AppState.artworks)

onMounted(() => {
  discoverArt()
})

async function discoverArt() {
  try {
    await artworkService.discoverArt()
  } catch (error) {
    Pop.error(error)
  }
}


</script>

<template>
  <h1>CodeWorks Institute of Fine Art</h1>

  <div class="container">
    <section class="row">


      <!-- Start of art template -->
      <div v-for="artwork in artworks" :key="artwork.i" class="artwork mb-3 col-3">
        <img class="img-fluid rounded"
          src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww"
          alt="">
        {{ artwork.regularArtImg }}
      </div>






    </section>
  </div>







</template>

<style scoped lang="scss"></style>
