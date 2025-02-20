import { FaTrashAlt, FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => (
    <li className={styles.contactItem}>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <FaUser className={styles.icon} />
                {contact.name}
            </div>
            <div className={styles.number}>
                <FaPhone className={styles.icon} />
                {contact.number}
            </div>
        </div>
        <button onClick={() => deleteContact(contact.id)} className={styles.button}>
            <FaTrashAlt />
        </button>
    </li>
);

export default Contact;
