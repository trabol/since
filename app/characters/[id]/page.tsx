import CharacterCardInfo from "@/app/components/characters/card/info";

async function getCharactersById(id: number) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  return res.json()
}

// METODO PARA LLMAR AL ID DE LA URL 
export default async function CardCharacterID({
  params,
}: Readonly<{ params: { id: number } }>) {
  const id = params.id
  const dataCharacters = getCharactersById(id)
  const [characters,] = await Promise.all([dataCharacters]);
  return (
    <CharacterCardInfo data={characters} />
  )

}