import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getCharacter } from "~/character";
import { Character } from "~/data/characters";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getCharacter(params.slug);
};

export default function PostSlug() {
  const character: Character = useLoaderData();
  return (
    <div
      style={{
        backgroundColor: "goldenrod",
        marginTop: "5rem",
        padding: "1rem",
      }}
    >
      <span className="characterName">{character.character}</span>
      <p>
        <strong>Actor: </strong>
        {character.actor}
      </p>
      <p>
        <strong>Role:</strong> {character.role}
      </p>
      <p>
        <strong>Biography:</strong> <br />
        {character.suspectBio}
      </p>
      <br />
      <div>
        <em>Costume Suggestion:</em> <br />
        {character.costumeSuggestions}
      </div>
    </div>
  );
}
