import Head from "next/head"
import { getSuccessStoriesData } from "@/datalayer/contentful/successStories"
import {
  SuccessCard,
  SuccessCardProps
} from "@/components/data/cards/SuccessSection"

type TSuccessPageProps = {
  storiesData: SuccessCardProps[]
}

export default function SuccessStories({ storiesData }: TSuccessPageProps) {
  return (
    <>
      <Head>
        <title>iGyanam.com</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <div className="mt-20">
        <h1 className="text-center">Our Success Stories</h1>
        <h3 className="mt-4 text-center text-gray-600">
          Here we grow together, we know that student results is what matters in
          the end. No educational institute can be successful without its
          students being successful. We are proud of our product that it is
          changing lives. Helping teachers to produce better results and helping
          students to achieve their dreams.
        </h3>
        <div className="grid grid-cols-2 gap-4 my-10">
          {storiesData.map(story => (
            <SuccessCard
              key={story.studentName}
              studentImage={story.studentImage}
              studentName={story.studentName}
              collegeName={story.collegeName}
              successStory={story.successStory}
              instituteName={story.instituteName}
              examAndRank={story.examAndRank}
              className="flex-col"
            />
          ))}
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const storiesData = await getSuccessStoriesData()
  return {
    props: {
      storiesData
    }
  }
}