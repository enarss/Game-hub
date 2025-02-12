import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre}: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre, {params: {genre: selectedGenre?.id}}, [selectedGenre?.id]);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton} childern={<GameCardSkeleton />} />
        ))}
        {games.map((game) => (
          <GameCardContainer key={game.id} childern={<GameCard game={game} />} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
