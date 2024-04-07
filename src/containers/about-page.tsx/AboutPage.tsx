import { FAQs } from "@/components/FAQs";
import { Header } from "./Header";
import { styled } from "styled-system/jsx";
import { MissionVision } from "./MissionVision";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { AboutPageQueryResult } from "sanity.types";

const fetchAboutPageInfo = () => {
  const AboutPageQuery = groq`
    *[_type == "page" && slug.current == 'about'][0] {
      _id,
      pageBuilder
    }
  `;

  const result = client.fetch<AboutPageQueryResult>(AboutPageQuery);

  return result;
};

export const AboutPage = async () => {
  const data = await fetchAboutPageInfo();

  const headerContent = data?.pageBuilder ? data.pageBuilder[0] : null;
  const missionContent = data?.pageBuilder ? data.pageBuilder[1] : null;
  const visionContent = data?.pageBuilder ? data.pageBuilder[2] : null;

  return (
    <>
      <Header data={headerContent} />

      <main>
        <MissionVision mission={missionContent} vision={visionContent} />
        <styled.div mt="200px">
          <FAQs />
        </styled.div>
      </main>
    </>
  );
};
