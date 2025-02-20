import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import './App.css';
import initialContacts from '../contacts.json';

function App() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
        if (savedContacts && savedContacts.length > 0) {
            setContacts(savedContacts);
        } else {
            setContacts(initialContacts);
            window.localStorage.setItem('contacts', JSON.stringify(initialContacts));
        }
        setIsInitialLoad(false);
    }, []);

    useEffect(() => {
        if (!isInitialLoad) {
            window.localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts, isInitialLoad]);

    const addContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const deleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
    };

    const handleSearch = (e) => {
        setFilter(e.target.value);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox filter={filter} handleSearch={handleSearch} />
            <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
        </div>
    );
}

export default App;
