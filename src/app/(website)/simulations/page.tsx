import { SimulationsPage } from "@/containers/simulations-page/SimulationsPage";

type SimulationsPageProps = {
  searchParams: {
    filter?: string;
    sort?: string;
  };
};

export const revalidate = 1;

export default async function Simulations(props: SimulationsPageProps) {
  return (
    <SimulationsPage
      filter={props.searchParams.filter}
      sort={props.searchParams.sort}
    />
  );
}
