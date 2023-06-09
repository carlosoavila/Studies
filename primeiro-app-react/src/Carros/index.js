import React from "react";
import Carro from './Carro';
import { Fragment } from "react";

const MostraMensagem = () => {
    alert("O criador do sistema é o Carlos!")
}

class Carros extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            carros: [{
                titulo: "BMW M5",
                descricao: "BMW M5 é um modelo esportivo da marca BMW. Ele é um derivado da Série 5, modificado pela Motorsport, a divisão de esportivos da BMW.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/2018_BMW_M5_Automatic_4.4.jpg/280px-2018_BMW_M5_Automatic_4.4.jpg"
            },
            {

                titulo: "BMW M3",
                descricao: "O BMW M3 é uma versão de alta performance da BMW Série 3, desenvolvido pela BMW M GmbH.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_BMW_M3_3.0.jpg/280px-2018_BMW_M3_3.0.jpg"

            },

            {

                titulo: "BMW E30",
                descricao: "O BMW E30 é um carro executivo compacto com motor frontal e tracção traseira produzido pela BMW entre 1981 a 1994, com a designação comercial Série 3.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1986_BMW_316_1.8_Front.jpg/280px-1986_BMW_316_1.8_Front.jpg"

            }
            ]
        }
    }


    
    removerUltimo = () => {
        
        let novo_carro = [...this.state.carros]
        novo_carro.pop()

        this.setState(state => ({

            carros:novo_carro
       
        }))

    }


    render() {
        return (
            <Fragment>

                <h2>Carro</h2>
                <button onClick={MostraMensagem}>Criador do sistema</button>
                <button onClick={this.removerUltimo}>Remover Último</button>

                {this.state.carros.map((carro) =>

                    <Carro

                        titulo={carro.titulo}
                        descricao={carro.descricao}
                        img={carro.img}

                    ></Carro>

                )}


            </Fragment>
        )
    }
}


export default Carros;