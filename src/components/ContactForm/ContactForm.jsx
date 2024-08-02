import {useId} from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({onAdd}) => {
    const idName = useId();
    const idPhone = useId();

    const handleSubmit = e => {
        e.preventDefault();
        // id: `id-${Date.now()}`,
        onAdd({
            name: e.target.elements.name.value,
            number: e.target.elements.phone.value,
        });
        e.target.reset();
    };
    return (
        <div className={css["contacts-form"]}>
            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css["form-group"]}>
                    <label htmlFor={idName}>Name</label>
                    <input type="text" name="name" id={idName} />
                </div>
                <div className={css["form-group"]}>
                    <label htmlFor={idPhone}>Number</label>
                    <input type="text" name="phone" id={idPhone} />
                </div>
                <button type="submit" className={css.btn}>
                    Add contact
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
