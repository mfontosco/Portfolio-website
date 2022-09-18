import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { contactAminActions } from "../../Redux/Actions/contactActions";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const dispatch = useDispatch();
  // const {loading,success,error,contact} = useSelector((state)=>state.contact)

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state.name, state.email, state.subject, state.message);

    const { name, email, subject, message } = state;
    if (!name || !email || !subject || !message) {
      alert("all fields must be field");
      return;
    }
    dispatch(contactAminActions(name, email, subject, message));
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <form onSubmit={submitHandler}>
          <div className={styles.action}>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              value={state.name}
              placeholder="YOUR NAME"
            />
            <input
              type="email"
              name="email"
              onChange={changeHandler}
              value={state.email}
              placeholder="YOUR EMAIL"
            />
          </div>
          <div className={styles.inputTextArea}>
            <input
              type="text"
              name="subject"
              onChange={changeHandler}
              value={state.subject}
              placeholder="YOUR SUBJECT"
            />
            <textarea
              name="message"
              onChange={changeHandler}
              value={state.message}
              cols="20"
              rows="5"
              placeholder="YOUR MESSAGE"
            ></textarea>
          </div>
          <button type="submit">
            SEND MESSAGE
            <span>
              <Link to="">
                <FaTelegramPlane className={styles.icon} size={24}/>
              </Link>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
