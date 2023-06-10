import React from "react";
import ImgRedonda from "../../Global/ImgRedonda";
import { Fragment } from "react";


const Carro = (props) => {

    

    const propriedades = ['Revisão anual', 'Manual de fábrica', 'Pintura original']
    const listaPropriedades = propriedades.map((n, index) => 
        <li key={index}>{n}</li>
    )

    if(props.img) {
        
            return (
        
                <Fragment>
        
     

                    <h3>{props.titulo}</h3>
                    
                    <p>{props.descricao}</p>
        
                    <ImgRedonda img={props.img}></ImgRedonda>

                    <ul>
                        {listaPropriedades}
                    </ul>
                </Fragment>
        
            )

    } else {

        return (
        
            <Fragment>
    
                <h3>{props.titulo}</h3>
                
                <p>{props.descricao}</p>
    
                <ImgRedonda img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXMzMyWlpbPz8+ZmZnLy8uVlZW2trbBwcHIyMidnZ3FxcWioqK0tLSqqqq8vLycnJytra2+1yOaAAAEJ0lEQVR4nO3aiW60OBAEYHfbxuaw4f2fdqvbzJFD/2q1ykaw9SmawADRuDC+JiEQERERERERERERERERERERERERERERERERERERERERERERERERERH9UfrtD/BfUl16L0mt2OmN7wR/t9Z640hS0L4LxA17uueHTdV+TYhGo+3/9if9SV2iRPzIoUFnbDnLIELDm4sd3/S3P+jPQbH3klKJMVfPYCkOO5bBjlOmm2eQgti9DnrEvXsGz7IigzXKErTJeusMQpjxFCw6SugZDJ5Bm2XCb9nk3hlMGU1AbKgEI4M2eAZHiyuag1xunoFu2Z53icXaRDnbxGgZSEODqWgO0s0zCJqmFYWOeflSD1oVKU3a3TPAo4/Hv6DZa/qlPdA9brtM9d4Z9Dl23xA8+p/6BaTSolWQmm+dQfGyBy3WR77qQTgzQIOAt25eD6zYa+8bbvcYH2yHm9QzsDFi05vXg7CcPYFYMzjLwzoyCHuU6fYZhHrg7sfVZ0frE2YPeAnhWOdF6zz33/6YP0sxSw7nQPHFd86XoLeuBUT0v+UrhI/10vftD5vfLh6mvzvhItRXToM+d9/ae/1wnr6do6+x4+uCy3YV04R+fpn8F0YG2JjGPcVmfxWqbK0d3ZaaQ5qe6rjAq9LYvyLNMmuYski2PduQceDIkh9lqmv2ZdVYbOcxcMy56GJX2rvPjetRiZaBrZkUGxXaqqkfSPG1bLrYOvO62lLzggxwZN5hjstYYbb158efuKC3DLZR8JGBTw9lH22FrSQk1dRsRmkZtOdDYhnYm7rKfvkMGuZENm1uZwYo0ybSLYSSrZT+ZtvClwxalIr0pF09A8FPCpush3gGeOiP6rc9hQNZeKFRFzR9zkCmiMNID3/h4hksVtBVjsPrgaIOFDwD1iqqf6fw7BERTzwhCrsMV+H8uV89g1xnlAQFGvVAY9zV2oRtZGAdhK0kRHQF1iaOfmH1DCaU39K7fAZSD5lLljTqQbclEg22apa0jXqw+4r7Yhms3ZXxLBTUopj75TPItVvrNmvzLxLQMqL7tzJ3+9LN2wMUusnI4GN7EERwoF4/gyVk7+k9g/r8YsV6iwX9wjj5+DYDPAgYMejlM0DZVrvrngFauLhZXS+zNQWP8UHouz8LcmZgL57B4cusd8gAJZE6MkDRfWrgYdioCDVibbvVjur9wjxM6hmgY0R6183gnC/kRdEioi9oWTAokjEo8rkBTnrOF1rV9/nChvmC/WNKzrlqzxedLwSfHZYNU77kc8eOeWOZpkUfhzfrF3XMG+uneWOxeWMZF+kyTr0iGwlqeD7gj/WAc03k3E3frR/YgsG5/Oxb4arrBx+lt9d/dNGVl5GIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOhf+gtYLx/sjzkWcQAAAABJRU5ErkJggg=="></ImgRedonda>
            
            </Fragment>
    
        )
    }
}

export default Carro;