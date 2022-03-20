import { Flex, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export const Header = () => {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      as="header"
      bg="white"
      w="100vw"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <SimpleGrid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="Um avião voando sobre a marca World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </SimpleGrid>
    </Flex>
  );
};
