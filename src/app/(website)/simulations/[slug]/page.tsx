import { SimulationPage } from "@/containers/simulation-page/SimulationPage";

type SingleSimulationPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 1;

export default function SingleSimulationPage(props: SingleSimulationPageProps) {
  return <SimulationPage slug={props.params.slug} />;
}
