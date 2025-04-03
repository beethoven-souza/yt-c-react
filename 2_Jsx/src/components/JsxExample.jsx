function JsxExample() {
  const user = {
    nome: "Beethoven",
    lastName: "Souza",
  };

  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Jose" },
  ];

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  return (
    <div>
      <h2>Conteúdo que o usuário irá ver.</h2>
      <p>
        {user.nome} {user.lastName}
      </p>
      <p>{getGreeting("Beethoven")}</p>
      <div className="alguma-coisa"></div>

      <button onClick={() => alert("Teste")}> CLique aqui.</button>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JsxExample;
