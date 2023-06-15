import React, { useState, useEffect } from "react";
import Carro from './Carro';
import { Fragment } from "react";
import Formulario from "./Form";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
        getCarros().then(dados => {
            setCarros(dados['carros'])
        })

    }, [])


    const addCarro = (novo_carros) => {
        setCarros([...carros, novo_carros])
    }

    return (
        <Fragment>

            <h2>Carro</h2>

            <ButtonGroup aria-label="Basic example">
                <Button onClick={MostraMensagem} variant="secondary">Mostrar Desenvolvedores</Button>
                <Button onClick={removerUltimo} variant="danger">Remover Último</Button>
            </ButtonGroup>

            <hr></hr>

            <Formulario addCarro={addCarro}></Formulario>

            {carros.map((carro) =>

                <Carro
                    id={carro.id}
                    titulo={carro.titulo}
                    descricao={carro.descricao}
                    img={carro.img}

                ></Carro>

            )}


        </Fragment>
    )
}



export default Carros;