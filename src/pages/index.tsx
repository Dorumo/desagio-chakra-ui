import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeContent } from "../components/HomeContent";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <HomeContent />
    </Flex>
  );
}
