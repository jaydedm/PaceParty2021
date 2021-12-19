import { useState } from "react";
import { Link, useLoaderData } from "remix";
import { getCharacters } from "~/character";
import { Character } from "~/data/characters";

export const loader = () => {
  return getCharacters();
};

const Characters = () => {
  const characters = useLoaderData<Character[]>();
  const [searchByCharacter, setSearchByCharacter] = useState(false);
  const [characterSearchValue, setcharacterSearchValue] = useState("");
  const [actorSearchValue, setActorSearchValue] = useState("");

  const searchedPosts = (posts: Character[]) => {
    if (searchByCharacter) {
      return posts.filter((post) =>
        post.character.toUpperCase().includes(characterSearchValue)
      );
    } else {
      return posts.filter((post) =>
        post.actor.toUpperCase().includes(actorSearchValue)
      );
    }
  };
  return (
    <div>
      <h1>Characters</h1>
      <label style={{ fontSize: "15px", fontWeight: "bold" }}>
        Search by Character Name:{"  "}
        <br />
        <input
          value={characterSearchValue}
          onClick={() => {
            setSearchByCharacter(true);
            setActorSearchValue("");
          }}
          onChange={(e) =>
            setcharacterSearchValue(e.target.value.toUpperCase())
          }
        ></input>
      </label>
      <br />
      <label style={{ fontSize: "15px", fontWeight: "bold" }}>
        Search by your Name:{"  "}
        <br />
        <input
          value={actorSearchValue}
          onChange={(e) => setActorSearchValue(e.target.value.toUpperCase())}
          onClick={() => {
            setcharacterSearchValue("");
            setSearchByCharacter(false);
          }}
        ></input>
      </label>
      <ul>
        {searchedPosts(characters)
          ?.sort((a, b) => a.actor.localeCompare(b.actor))
          .map((post: Character) => (
            <li key={post.character}>
              <Link to={post.character}>
                {post.character} | {post.actor}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Characters;
