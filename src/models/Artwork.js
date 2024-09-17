export class Artwork {
  constructor(data) {
    this.id = data.id,
      this.slug = data.slug,
      this.height = data.height,
      this.width = data.width,
      this.originalLink = data.originalLink
    this.rawImgUrl = data.imgUrls.raw
    this.fullImgUrl = data.imgUrls.full
    this.regularImgUrl = data.imgUrls.regular
    this.smallImgUrl = data.imgUrls.small
    this.description = data.description
    this.altDescription = data.altDescription
    this.attribution = data.attribution
    this.color = data.color

  }



}

const data = {
  "id": "dHRxSqkF4MI",
  "slug": "a-painting-of-a-bridge-over-a-body-of-water-dHRxSqkF4MI",
  "height": 3150,
  "width": 3959,
  "originalLink": "https://unsplash.com/photos/a-painting-of-a-bridge-over-a-body-of-water-dHRxSqkF4MI",
  "imgUrls": {
    "raw": "https://images.unsplash.com/photo-1695844032808-8c401559f952?ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NzZ8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3",
    "full": "https://images.unsplash.com/photo-1695844032808-8c401559f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NzZ8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=85",
    "regular": "https://images.unsplash.com/photo-1695844032808-8c401559f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NzZ8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=1080",
    "small": "https://images.unsplash.com/photo-1695844032808-8c401559f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NzZ8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=400",
    "thumb": "https://images.unsplash.com/photo-1695844032808-8c401559f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMTA1MjZ8MHwxfGNvbGxlY3Rpb258NzZ8a1dEMmRNQ3d2eTB8fHx8fDJ8fDE3MjY2MDI5OTN8&ixlib=rb-4.0.3&q=80&w=200",
    "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695844032808-8c401559f952"
  },
  "description": "Title: 1950P23 Le Pont Boieldieu, Rouen, Soleil Couchant Description: 1950P23 Le Pont Boieldieu, Rouen, Soleil Couchant [The Pont Boieldieu at Sunset], 1896 Oil on canvas Artist: Camille Pissarro (d. 1903) Keywords: Landscape, Birmingham Museums Trust/Birmingham Museum & Art Gallery, Oil Painting, France, River, Art Movement/Post-Impressionism, Sunset, Bridge https://dams.birminghammuseums.org.uk/asset-bank/action/viewAsset?id=20584",
  "altDescription": null,
  "attribution": "Birmingham Museums Trust",
  "color": "#d9d9a6",
  "admirers": [],
  "cached": true
}


