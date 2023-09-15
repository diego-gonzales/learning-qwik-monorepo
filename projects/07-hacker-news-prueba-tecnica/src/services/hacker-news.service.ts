export const getTopStories = async (page: number, limit: number) => {
  const url = `https://hacker-news.firebaseio.com/v0/topstories.json`;

  const response = await fetch(url);
  const data = (await response.json()) as number[];

  const start = (page - 1) * limit;
  const end = page * limit;

  const ids = data.slice(start, end);
  return ids;
};

export async function getItemInfoById<T>(itemId: number) {
  const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;

  const response = await fetch(url);
  const data = (await response.json()) as T;

  return data;
}
