import client from "./client"

export const getSuccessStoriesData = async () => {
  const res = await client.getEntries({
    content_type: "successStories",
    include: 5
  })
  const rawResponse = res.items
  const response = rawResponse.map(story => storyReducer(story))
  return response
}

export const storyReducer = story => {
  const {
    fields: {
      studentName,
      instituteName,
      successStory,
      collegeName,
      examAndRank,
      studentImage
    }
  } = story
  return {
    studentName,
    instituteName,
    successStory,
    collegeName,
    examAndRank,
    studentImage: imageReducer(studentImage)
  }
}

export const imageReducer = imageField => {
  return {
    url: `https:${imageField?.fields.file.url}` || null,
    width: imageField?.fields.file.details.image.width || null,
    height: imageField?.fields.file.details.image.height || null
  }
}
