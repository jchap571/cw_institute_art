import { Artwork } from "@/models/Artwork.js"
import { artAPI } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
class ArtworkService {
  async discoverArt() {
    const response = await artAPI.get('')
    console.log('getting art', response.data)
    const newArt = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = newArt
  }
}


export const artworkService = new ArtworkService()