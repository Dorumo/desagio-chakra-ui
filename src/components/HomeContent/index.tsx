import { Divider, Heading } from "@chakra-ui/react";
import { Banner } from "../Banner";
import { Slider } from "../Slider";
import { TravelCategories } from "../TravelCategories";

export const HomeContent = () => {
  return (
    <>
      <Banner />
      <TravelCategories />
      <Divider
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente.
      </Heading>
      <Slider />
    </>
  );
};
