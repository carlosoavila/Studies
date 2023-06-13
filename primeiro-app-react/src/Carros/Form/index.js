import React, {useState} from "react";
import { Fragment } from "react";

const Formulario = (props) => {

    const[campos, setCampos] = useState(
        {
            titulo: ''

        }
    );
    const handleChange = (event) => setCampos (
        {
            ...campos,
            [event.currentTarget.name] : event.currentTarget.value
        }
    )
    const handleSubmit = event => {
        props.addCarro (campos)
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Nomes: </label>
                <input id="titulo" name="titulo" type="text" value={campos.titulo} onChange={handleChange}/>
                
                <label htmlFor="descricao">Descricao: </label>
                <input id="descricao" name="descricao" type="text" value={campos.descricao} onChange={handleChange}/>
                
                <label htmlFor="img">URL da imagem: </label>
                <input id="img" name="img" type="text" value={campos.img} onChange={handleChange}/>
                
                <input type="submit"/>

            </form>
        </Fragment>
    )
}

export default Formulario;