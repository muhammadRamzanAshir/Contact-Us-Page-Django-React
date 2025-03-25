import Button from "../button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import { MdPhone} from "react-icons/md";
import { MdMail} from "react-icons/md";
import { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
    const [message  , setMessage]   = useState("");
    const [name     ,  setName  ]   = useState("");
    const [email    , setEmail  ]   = useState("");
    const [text     ,  setText  ]   = useState("");
    
    const onSubmit = async(event) =>{
        event.preventDefault();
        // setName (event.target[0].value);
        // setEmail(event.target[1].value);
        // setText (event.target[2].value);

        const formData = {
            name    : event.target[0].value,
            email   : event.target[1].value,
            text    : event.target[2].value,
        };

        try{
            const response = await axios.post("http://127.0.0.1:8000/api/contact/",formData);
            setMessage(response.data.message);
            event.target.reset();  
        }
        catch(error){
            setMessage(error.response?.data?.error || "An error is occured")
        }

    }
    
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage font-size="24px" />}
                    />
                    <Button
                        text="VIA CALL"
                        icon={<MdPhone font-size="24px"/>}
                    />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<MdMail font-size="24px"/>}
                />
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea rows="8" name="text" />
                </div>
                <div
                    style={{
                        display:"flex",
                        justifyContent:"end"
                    }}
                >
                    <Button
                        text="SUBMIT BUTTON"
                    />
                </div>
            </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/Service 24_7-pana 1.svg" alt=""  />
            </div>
        </section>
    );
}

export default ContactForm;