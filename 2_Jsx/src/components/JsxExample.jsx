function JsxExample(){

    const user = {
        nome : "Beethoven",
        lastName : "Souza",

    }

    function getGreeting(name) {
        return `Olá ${name}`
    }

    return(
        <div>
            <h2>
                Conteúdo que o usuário irá ver.
            </h2>
            <p>{user.nome} {user.lastName}</p>
            <p>{getGreeting("Pamela")}</p>
        </div>
    )
}

export default JsxExample