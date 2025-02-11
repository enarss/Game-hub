import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre"

const GenreList = () => {
    const {genres, error, isLoading} = useGenres();
    return (
        <List>
            {genres.map(genre => <ListItem paddingY='5px' key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList