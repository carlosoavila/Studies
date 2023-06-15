import React, { useState, useEffect} from "react";
import Carro from './Carro';
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



async function getCarros() {
    let response = await fetch('http://localhost:3000/api/Carros.json')
    let dados = await response.json()
    return dados;
}

const View = () => {

    const [carros, setCarros] = useState([])

  

    useEffect(() => {
        getCarros().then (dados => {
            setCarros(dados['carros'])
    })

}, [])


const {id} = useParams();
 

    return (
        <Fragment>

            <Link to={'../'}>Voltar</Link>

            {carros.filter(carro => carro.id === Number(id)).map(carroFiltrado => (

                <Carro

                    titulo={carroFiltrado.titulo}
                    descricao={carroFiltrado.descricao}
                    img={carroFiltrado.img}

                ></Carro>

            ))}


        </Fragment>
    )
}



export default View;