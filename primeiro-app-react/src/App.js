import Carros from './Carros';
import './App.css';
import {

  BrowserRouter as Router,
  useRoutes,

} from "react-router-dom"

const Sobre = () => {
  return (
    <h1>Essa é a página Sobre</h1>

  )
}

const App = () => {
  let routes = useRoutes ([
    {path:"/", element:<Carros/>},
    {path:"Sobre", element:<Sobre/>},
  ]);

  return routes;
};

const appWrapper =() => {
  return (
    <Router>
      <App/>
    </Router>  
    )
}

export default appWrapper;
