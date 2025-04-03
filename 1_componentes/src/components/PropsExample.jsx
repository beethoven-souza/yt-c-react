import React from 'react'

const PropsExample = (props) => {
  return (
    <div>
        <h1>
            Olá {props.nome}
            <p>Eu tenho {props.idade}</p>
        </h1>
    </div>
  )
}

export default PropsExample