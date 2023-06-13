import React, { useState, useEffect} from "react";
import Carro from './Carro';
import { Fragment } from "react";
import Formulario from "./Form";

const MostraMensagem = () => {
    alert("O criador do sistema é o Carlos!")
}

async function getCarros() {
    let response = await fetch('http://localhost:3000/api/Carros.json')
    let dados = await response.json()
    return dados;
}

const Carros = () => {

    const [carros, setCarros] = useState([])

    const removerUltimo = () => {

        let novo_carros = [...carros]
        novo_carros.pop()

        setCarros(novo_carros)

    }

    useEffect(() => {
        getCarros().then (dados => {
            setCarros(dados['carros'])
    })

}, [])


    const addCarro = (novo_carros) => {
        setCarros ([...carros, novo_carros])
    }

    return (
        <Fragment>

            <h2>Carro</h2>
            <button onClick={MostraMensagem}>Criador do sistema</button>
            <button onClick={removerUltimo}>Remover Último</button>
            <hr></hr>
            <Formulario addCarro={addCarro}></Formulario>

            {carros.map((carro) =>

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