export interface Game {
  identifier: string;
  seo_title: string;
  title: string;
  provider: string;
  categories: string[];
}

export default async function getGames(): Promise<Game[]> {
  const res = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
