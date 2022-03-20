import { Grid, GridItem } from "@chakra-ui/react";
import { Categories } from "./Categories";

export const TravelCategories = () => {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems='center'
      mt={['10', '32']}
      mx='auto'
      maxW='1160px'
      gap={[1, 5]}
    >
      <GridItem>
        <Categories icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Categories icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Categories icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Categories icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Categories icon="earth" text="e muito mais..." />
      </GridItem>
    </Grid>
  );
};
