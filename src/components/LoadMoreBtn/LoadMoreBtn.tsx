import styles from './LoadMoreBtn.module.css';

interface Props {
  onLoadMore: () => void;
}

export default function LoadMoreBtn({ onLoadMore }: Props) {
  return (
    <button type="button" className={styles.loadMoreBtn} onClick={onLoadMore}>
      Load more
    </button>
  );
}