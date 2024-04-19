import { FAQs } from "@/components/FAQs";
import { Header } from "./Header";
import { styled } from "styled-system/jsx";
import { MissionVision } from "./MissionVision";
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { AboutPageQueryResult, HeroWithGrid } from "sanity.types";
import { HeroContent } from "@/lib/shared.types";
import { TheTeam } from "./TheTeam";

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
  const teamContent = data?.pageBuilder ? data.pageBuilder[3] : null;

  return (
    <>
      <Header data={headerContent as HeroContent} />

      <main>
        <MissionVision
          mission={missionContent as HeroContent}
          vision={visionContent as HeroContent}
        />
        <TheTeam data={teamContent as HeroWithGrid} />
        <styled.div mt="200px">
          <FAQs />
        </styled.div>
      </main>
    </>
  );
};
