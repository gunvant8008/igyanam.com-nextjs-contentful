// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getHomePageData } from "@/datalayer/contentful/homePage"
import { getFeaturesData } from "@/datalayer/contentful/features"
import { getSuccessStoriesData } from "@/datalayer/contentful/successStories"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getSuccessStoriesData()
  res.status(200).json(response)
}
