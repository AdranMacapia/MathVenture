import { SimulationPage } from "@/containers/simulation-page/SimulationPage";

type SingleSimulationPageProps = {
  params: {
    slug: string;
  };
};

export default function SingleSimulationPage(props: SingleSimulationPageProps) {
  return <SimulationPage slug={props.params.slug} />;
}
