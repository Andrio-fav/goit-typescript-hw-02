import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';

const searchParams: Record<string, string> = {
  client_id: 'bv9U6wekr-oF4B9Vq5DBSX8gHGeI7CA_i-kAM-Qnm0g',
  query: '',
  orientation: 'landscape',
  page: '1',
  per_page: '12',
};

export default async function fetchPhotos<T>(
  query: string,
  page: number,
): Promise<T> {
  searchParams.query = query;
  searchParams.page = String(Number(searchParams.page) + page);
  const response = await axios.get(`?${new URLSearchParams(searchParams)}`);
  const data: T = response.data.results;
  return data;
}