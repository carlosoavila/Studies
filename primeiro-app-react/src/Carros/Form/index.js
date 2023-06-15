import React, { useState } from "react";
import { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formulario = (props) => {

    const [campos, setCampos] = useState(
        {
            titulo: ''

        }
    );
    const handleChange = (event) => setCampos(
        {
            ...campos,
            [event.currentTarget.name]: event.currentTarget.value
        }
    )
    const handleSubmit = event => {
        props.addCarro(campos)
        event.preventDefault();
    }

    return (
        <Fragment>




            <Form onSubmit={handleSubmit}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Título do Carro</Form.Label>
                    <Form.Control id="titulo" name="titulo" type="text" value={campos.titulo} onChange={handleChange} placeholder="Digite o nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descricao</Form.Label>
                    <Form.Control id="descricao" name="descricao" type="text" value={campos.descricao} onChange={handleChange} placeholder="Digite a Descrição" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>URL da Imagem</Form.Label>
                    <Form.Control id="img" name="img" type="text" value={campos.img} onChange={handleChange} placeholder="URL" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Salvar
                </Button>

            </Form>
        </Fragment>
    )
}

export default Formulario;