export interface ImageCardProps {
  open: (url: string) => void;
  descr: string;
  url: string;
  large: string;
}

export type UnsplashApiResponse = {
  results: UnsplashImage[];
};

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ImageType {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export function mapUnsplashToImageType(data: UnsplashImage[]): ImageType[] {
  return data.map(img => ({
    id: Number(img.id) || 0,
    webformatURL: img.urls.small,
    largeImageURL: img.urls.regular,
    tags: img.alt_description ?? '',
  }));
}