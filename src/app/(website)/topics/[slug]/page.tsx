import { TopicPage } from "@/containers/topic-page/TopicPage";

type SingleTopicPageProps = {
  params: {
    slug: string;
  };
};

export default function SingleTopicPage(props: SingleTopicPageProps) {
  return <TopicPage slug={props.params.slug} />;
}
