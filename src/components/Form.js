import React from "react";
import decoration from "./../assets/Decoration.svg";
import fb from "./../assets/Facebook.svg";
import ig from "./../assets/Instagram.svg";
import { useState } from "react";
const Form = () => {
  const [send, setSend] = useState(false);
  const [form, setForm] = useState({
    nameForm: "",
    email: "",
    textAreaInput: ""
  });
  const { nameForm, email, textAreaInput } = form;
  const [errors, setErrors] = useState({
    nameForm: "",
    email: "",
    textAreaInput: ""
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validate = () => {
    const email = document.querySelector("input[name=email]").value;
    const err = {};
    const b1 = document.querySelector(".name");
    const b2 = document.querySelector(".email");
    const b3 = document.querySelector(".textAreaInput");
    if (form.textAreaInput.length < 120) {
      err.textAreaInput = "Wiadomość musi mieć conajmniej 120 znaków!";
      b3.style.borderColor = "red";
    } else {
      err.textAreaInput = "";
      b3.style.borderColor = "#3c3c3c";
    }

    if (form.nameForm.indexOf(" ") >= 0 || form.nameForm.length <= 0) {
      err.nameForm = "Podane imię jest nieprawidłowe!";
      b1.style.borderColor = "red";
    } else {
      err.nameForm = "";
      b1.style.borderColor = "#3c3c3c";
    }
    if (validateEmail(email) == true) {
      err.email = "";
      b2.style.borderColor = "#3c3c3c";
    } else {
      err.email = "Podany email jest nieprawidłowy!";
      b2.style.borderColor = "red";
    }
    console.log(err);
    setErrors(err);
    return !Object.values(err).find((e) => e.length > 0);
  };
  const handleOnSubmit = (e) => {
      if (validate()) {

    e.preventDefault();
      setSend(true);
    }
    //   e.preventDefault();
    //   if (validate()) {
    //     fetch(`${API + url}`, {
    //       method: "POST",
    //       body: JSON.stringify(newAdvertisement),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }
  };
  return (
    <div className="mainViewForm" name="form">
      <div className="upperView">
        <div className="form">
          <p>Skontaktuj się z nami</p>
          <img src={decoration} alt="Black line decoration" />
          <div
            className="succes"
            style={{ display: send === true ? "block" : "none" }}
          >
            Wiadomość została wysłana!
            <br />
            Wkrótce się skontaktujemy
          </div>
          <form id="myForm" onSubmit={handleOnSubmit}>
            <div className="nameEmail">
              <div className="inputForm">
                <label>Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  name="nameForm"
                  value={nameForm}
                  onChange={handleFormData}
                  className="name"
                ></input>
                <p className="error">{errors.nameForm}</p>
              </div>
              <div className="inputForm">
                <label>Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  value={email}
                  className="email"
                  name="email"
                  onChange={handleFormData}
                ></input>
                <p className="error">{errors.email}</p>
              </div>
            </div>
            <div className="textareaForm">
              <label className="textareaLabel">Wpisz swoją wiadomość</label>
              <textarea
                value={textAreaInput}
                onChange={handleFormData}
                name="textAreaInput"
                className="textAreaInput"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></textarea>
              <p className="error">{errors.textAreaInput}</p>
              <div className="button"></div>
              <div className="button">
                <button
                  type="submit"
                  onClick={handleOnSubmit}
                  className="buttonForm"
                >
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer>
        <div></div>
        <p>Copyright by Coders Lab</p>
        <div>
          <img src={fb} alt="Facebook Icon" />
          <img src={ig} alt="Instagram Icon" />
        </div>
      </footer>
    </div>
  );
};
export default Form;
