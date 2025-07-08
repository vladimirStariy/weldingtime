import { MainBlock } from "@/components/blocks/main-block";
import { Container } from "@/components/container/container";

function Home() {
  return (
    <>
      <Container className="bg-[#f5f5f5]">
        <MainBlock anchor="about" />
      </Container>
      <Container className="bg-white">
        <MainBlock anchor="services" />
      </Container>
      <Container className="bg-[#f5f5f5]">
        <MainBlock anchor="contacts" />
      </Container>
    </>
  );
}

export default Home