import client from "./client"

export const getFeaturesData = async () => {
  const res = await client.getEntries({
    content_type: "features",
    include: 5
  })
  const rawResponse = res.items
  const response = rawResponse.map(feature => featureReducer(feature))
  return response
}

export const featureReducer = feature => {
  const {
    fields: { featureTitle, featureDescription, featureVideo, featureImage }
  } = feature
  return {
    featureTitle,
    featureDescription,
    featureVideo,
    featureImage: imageReducer(featureImage)
  }
}

export const imageReducer = imageField => {
  return {
    url: `https:${imageField?.fields.file.url}` || null,
    width: imageField?.fields.file.details.image.width || null,
    height: imageField?.fields.file.details.image.height || null
  }
}
