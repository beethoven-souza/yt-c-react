import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando");
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("enviado");
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique Teste</button>
      <br />
      <button onClick={() => handleGreet("Ana")}>Dizer olá Ana</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer olá Pedro</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu nome" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExamples;
