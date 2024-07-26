import CharacterCardInfo from "@/app/components/characters/card/info";
import { Icharacter } from "./interfaces/charateres";

async function getCharacters() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  return res.json()
}



export default async function Home() {

  const dataCharacters = getCharacters()

  const [characters,] = await Promise.all([dataCharacters]);

  return (
    <main className="flex min-h-screen p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {
          characters?.results.map((character: Icharacter) => (
            <div key={character.id}>
              <CharacterCardInfo
                data={character}
              />
            </div>
          ))
        }
      </div>
    </main>
  );
}
