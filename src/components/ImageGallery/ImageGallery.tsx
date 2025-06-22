import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import type { ImageType } from '../../types';

interface Props {
  images: ImageType[];
  openModal: (image: ImageType) => void;
}

export default function ImageGallery({ openModal, images }: Props) {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li className={styles.galleryItem} key={image.id}>
          <ImageCard
            open={() => openModal(image)}  
            descr={image.tags}         
            url={image.webformatURL}    
            large={image.largeImageURL} 
          />
        </li>
      ))}
    </ul>
  );
}
