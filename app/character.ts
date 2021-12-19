import characters from "./data/characters";

export type CharacterAttributes = {
  title: string;
};

export async function getCharacters() {
  return characters;
}

export async function getCharacter(characterName: string) {
  return characters.find((character) => character.character === characterName);
}
