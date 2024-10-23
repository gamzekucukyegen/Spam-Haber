import { useState } from "react";
import emailList from "./data/emailList";
import TopText from "./components/TopText";
import "./styles.css";
export default function App() {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [duplicate, setDuplicate] = useState(null);

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUserEmail(userInput);
    setUserInput(" ");
    const isDuplicate = emailList.some(email => email.toLowerCase() === userEmail.toLowerCase());
    setDuplicate(isDuplicate)
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      <TopText userEmail={userEmail} duplicate={duplicate} />

      <div>
        <input
          required
          placeholder={
            !userEmail ? "E-mail adresinizi girin" : "Arkadaşınızı abone yapın"
          }
          type="email"
          name="email"
          onChange={handleChange}
          value={userInput}
        />

        <button type="submit">Abone Olun</button>
      </div>
    </form>
  );
}
