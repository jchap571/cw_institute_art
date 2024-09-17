<script setup>
import { Artwork } from "@/models/Artwork.js";



defineProps({
  artProp: { type: Artwork, required: true }

})


</script>


<template>

  <img :src="artProp.smallImgUrl" class="img-fluid rounded my-3" :alt="`${artProp.description}`"
    :title="artProp.description">



</template>


<style lang="scss" scoped>
img {
  height: 200px;
}
</style>