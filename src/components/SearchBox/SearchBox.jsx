import styles from './SearchBox.module.css';

const SearchBox = ({ filter, handleSearch }) => (
    <div className={styles.searchContainer}>
        <label className={styles.label}>Search Contacts</label>
        <input
            type="text"
            value={filter}
            onChange={handleSearch}
            className={styles.input}
            placeholder="Type to search..."
        />
    </div>
);

export default SearchBox;
