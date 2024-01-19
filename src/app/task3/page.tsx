import getGames, { Game } from '@/services/Games';
import Link from 'next/link';

export default async function Page() {
  const games = await getGames();

  return (
    <div className="w-full min-h-[100vh] p-4">
      <div>
        <h1 className="flex justify-center">Task3</h1>
        <ul className="space-y-2 px-[20px]">
          {games && games.map((game: Game) => (
            <li key={game.identifier} className="list-disc">
              <Link href={`/games/${game.provider || game.categories[0]}/${game.seo_title}`} className="hover:underline">
                /games/{game.provider || game.categories[0]}/{game.seo_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
