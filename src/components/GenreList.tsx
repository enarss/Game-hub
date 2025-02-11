import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre"
import { Genre } from "../hooks/useGenre";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {genres, error, isLoading} = useGenres();
    if(error) return null;
    if(isLoading) return <Spinner />;
    return (
        <List>
            {genres.map(genre => <ListItem paddingY='5px' key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
                    <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList