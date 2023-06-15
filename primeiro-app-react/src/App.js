import Carros from './Carros';
import View from './Carros/view';
import './App.css';
import {

  BrowserRouter as Router,
  useRoutes,

} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Carros/Carro/menu';
import { Container } from 'react-bootstrap';

const Sobre = () => {
  return (
    <h1>Essa é a página Sobre</h1>

  )
}

const App = () => {
  let routes = useRoutes ([
    {path:"/", element:<Carros/>},
    {path:"Sobre", element:<Sobre/>},
    {path:"view/:id", element:<View/>},
  ]);

  return routes;
};

const appWrapper =() => {
  return (
    <Router>
      <Menu/>
      <Container>
      <App/>
      </Container>
    </Router>  
    )
}

export default appWrapper;
