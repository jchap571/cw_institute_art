<script setup>
import { AppState } from "@/AppState.js";
import Artwork from "@/components/Artwork.vue";
import { artworkService } from "@/services/ArtworkService.js";
import Pop from "@/utils/Pop.js";
import { onMounted, computed } from "vue";


const artworks = computed(() => AppState.artworks)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)


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


async function changePage(pageNumber) {
  try {
    await artworkService.changePage(pageNumber)
    // const 
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>
  <div class="text-center">
    <h1>CodeWorks Institute of Fine Art</h1>
  </div>

  <div class="container">
    <section class="row">
      <div class="col-12">
        <div class="d-flex gap-4 my-2 align-items-center">
          <button @click="changePage(currentPage - 1)" class="btn btn-outline-dark rounded-pill">Previous</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="changePage(currentPage + 1)" class="btn btn-outline-dark rounded-pill">Next</button>
        </div>

      </div>

      <!-- Start of art template -->
      <div v-for="artwork in artworks" :key="artwork.smallImgUrl" class="artwork card mb-3 col-3 bg-dark gap-2">
        <Artwork :artProp="artwork" />

      </div>






    </section>
  </div>







</template>

<style scoped lang="scss"></style>
