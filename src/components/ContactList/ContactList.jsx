import Contact from './Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
    <ul className={styles.list}>
        {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
        ))}
    </ul>
);

export default ContactList;
