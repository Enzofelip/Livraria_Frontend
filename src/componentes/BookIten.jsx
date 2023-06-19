import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "../axios-config"

const BookIten = ({book, removBook, completeTodo}) => {
    const [estado, setEstado] = useState(false)

    const handleEstado = () => {
        if(estado){
            setEstado(false)
          }else{
            setEstado(true)
          }
    }
    return(
        <div className='todo' style={{textDecoration: book.isCompleted ? "line-through" : ''}}>
        <div className='content'>
            <img src={`${axios.defaults.baseURL}${book.src}`} alt={book.title}/>
            <h2>{book.title}</h2>
            <p>Autor: <span>{book.name}</span></p>
            {estado &&(
              <div>
                <p>Descrição: <span style={{color: "red"}}>{book.description}</span></p>
                <p>Categoria: <span style={{color: "red"}}>({book.select})</span></p>
              </div>
            )}
            <button onClick={handleEstado}>Ver mais</button>  
        </div>
        <div className="action">
          <button className="complete" onClick={(e) => completeTodo(book.id)}>+</button>
          <button className="remove" onClick={(e) => removBook(book.id)}>x</button>
        </div>
      </div>
    )
}

export default BookIten