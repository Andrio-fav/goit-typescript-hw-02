import { useEffect, useState } from 'react';
import css from './App.module.css';
import { BeatLoader } from 'react-spinners';
import fetchPhotos from './searchImg';
import Modal from 'react-modal';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import type { ImageType } from './types';

export default function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageType | null>(null);

  function openModal(image: ImageType) {
    setModalImage(image);
    setIsOpen(true);
    Modal.setAppElement('#root');
  }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  const handleSearch = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (query === '') return;

    async function fetchMorePhotos() {
      try {
        setIsError(false);
        setIsLoading(true);
        const newPhotos: ImageType[] = await fetchPhotos(query, page);
        setImages((prevPhotos) => [...prevPhotos, ...newPhotos]);

      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMorePhotos();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <BeatLoader color="#36d7b7" />}
      {images.length > 0 && <ImageGallery openModal={openModal} images={images} />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      {modalImage && (
        <ImageModal modalIsOpen={modalIsOpen} onClose={closeModal} image={modalImage} />
      )}
    </div>
  );
}
