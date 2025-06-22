import css from './ImageModal.module.css';
import Modal from 'react-modal';
import type { JSX, MouseEventHandler } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import type { ImageType } from '../../types';

interface ImageModalProps {
  image: ImageType;
  modalIsOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export default function ImageModal({ image, modalIsOpen, onClose }: ImageModalProps): JSX.Element {
  Modal.setAppElement('#modal');
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      contentLabel="Full image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <p className={css.text}>Description: {image.tags || 'No description'}</p>
      <button className={css.closeBtn} onClick={onClose} aria-label="Close modal">
        x
      </button>
      <ImageCard
        url={image.webformatURL}
        large={image.largeImageURL}
        descr={image.tags}
        open={() => {}}
      />
    </Modal>
  );
}
