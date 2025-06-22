import axios from 'axios';
import type { ImageType, UnsplashApiResponse } from './types';
import { mapUnsplashToImageType } from './types';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';
const ACCESS_KEY = 'bv9U6wekr-oF4B9Vq5DBSX8gHGeI7CA_i-kAM-Qnm0g';

export default async function fetchPhotos(
  query: string,
  page: number
): Promise<ImageType[]> {
  const searchParams = new URLSearchParams({
    client_id: ACCESS_KEY,
    query,
    orientation: 'landscape',
    page: String(page),
    per_page: '12',
  });

  const response = await axios.get<UnsplashApiResponse>(`?${searchParams}`);

  return mapUnsplashToImageType(response.data.results);
}
