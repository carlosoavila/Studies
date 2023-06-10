import React, { useState } from "react";
import Carro from './Carro';
import { Fragment } from "react";

const MostraMensagem = () => {
    alert("O criador do sistema é o Carlos!")
}

/*async function getCarros() {
    let response = await fetch('http://localhost:3000/api/Carros.json')
    let dados = await response.json()
    return dados;
}*/

const Carros = () => {

    const [carros, setCarros] = useState({
        "titulo": "BMW M5",
        "descricao": "BMW M5 é um modelo esportivo da marca BMW. Ele é um derivado da Série 5, modificado pela Motorsport, a divisão de esportivos da BMW.",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/280px-2018_BMW_M5_Automatic_4.4.jpg"
    })

    const removerUltimo = () => {

        let novo_carro = [...carros]
        novo_carro.pop()

        setCarros(novo_carro)

    }



    return (
        <Fragment>

            <h2>Carro</h2>
            <button onClick={MostraMensagem}>Criador do sistema</button>
            <button onClick={removerUltimo}>Remover Último</button>

            {arros.map((carro) =>

                <Carro

                    titulo={carro.titulo}
                    descricao={carro.descricao}
                    img={carro.img}

                ></Carro>

            )}


        </Fragment>
    )
}



export default Carros;