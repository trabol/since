
import CharacterCardInfo from "@/app/components/characters/card/info";
import { Icharacter } from "@/app/interfaces/charateres";

async function getCharacters() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  return res.json()
}

export default async function PageCharacters() {
  const dataCharacters = getCharacters()
  const [characters,]: any = await Promise.all([dataCharacters]);

  return (
    <>
      {
        characters?.results.map((character: Icharacter) => (
          <div key={character.id}>
            <CharacterCardInfo
              data={character}
            />
          </div>
        ))
      }
    </>
  );
}
