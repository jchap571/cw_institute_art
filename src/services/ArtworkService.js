import { Artwork } from "@/models/Artwork.js"
import { artAPI } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
class ArtworkService {
  async discoverArt() {
    const response = await artAPI.get('')
    console.log('getting art', response.data)
    const newArt = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = newArt

    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }



  async changePage(pageNumber) {
    const response = await artAPI.get(`?page=${pageNumber}`)
    console.log('changing to page number', pageNumber, response.data)

  }

}


export const artworkService = new ArtworkService()