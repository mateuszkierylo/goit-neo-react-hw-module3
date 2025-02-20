import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, { resetForm, event }) => {
        event?.preventDefault();
        const newContact = { id: nanoid(), ...values };
        addContact(newContact);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.formContainer}>
                <label className={styles.label}>Name</label>
                <Field name="name" className={styles.input} />
                <ErrorMessage name="name" component="div" className={styles.error} />

                <label className={styles.label}>Number</label>
                <Field name="number" className={styles.input} />
                <ErrorMessage name="number" component="div" className={styles.error} />

                <button type="submit" className={styles.button}>Add Contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
