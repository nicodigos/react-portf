import Header from "./components/Header";
import ButtonsList from "./components/ButtonsList";
import SectionTitle from "./components/SectionTitle";

type Props = {
  links: string[][];
};

function Experience({ links }: Props) {
  return (
    <>
      <Header
        children={
          <ButtonsList
            labels={links.slice(0, 3)}
            style="style-three"
            hover_style="style-four"
          ></ButtonsList>
        }
        scrolled={true}
      ></Header>
      <SectionTitle text={"Experience"}></SectionTitle>
    </>
  );
}

export default Experience;
