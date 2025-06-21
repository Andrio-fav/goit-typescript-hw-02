import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void | string => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const searchQuery = formData.get('querry') as string;
    if (searchQuery.trim() === '') {
      return toast('Search field must not be empty!');
    }
    onSearch(searchQuery);
    form.reset();
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          name="querry"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}