import getGames, { Game } from '@/services/Games';
import Image from 'next/image';

export default async function Page({ params }: { params: { category: string, title: string } }) {
  const games = await getGames();
  const game = games.find((g: Game) => (g.provider === params.category || g.categories.includes(params.category)) && g.seo_title === params.title);

  return (
    <div className="w-full min-h-[100vh] p-4 flex items-center justify-center">
      {game && (
        <div>
          <h1 className="font-bold items-center">{game.title}</h1>
          <p><b>Provider:</b> {game.provider}</p>
          <p><b>Categories:</b> {game.categories.join(', ')}</p>
          <Image src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} alt={game.title} width={320} height={240}/>
        </div>
      )}
    </div>
  );
}
