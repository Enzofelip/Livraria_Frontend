import { useState } from "react"

const BookList = ({addList}) => {

    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [select, setSelect] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault()

        // console.log(image)
        addList(title,name,description, select)
        setTitle("");
        setName("");
        setDescription("");
        setSelect("");
    }
    return(
        <div className="todo-form">
            <h2>Criar tarefas</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-cnontrol">
                    <label>Titulo:</label>
                    <input type="text" name="title" placeholder="Digite so titulo"  onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>

                <div className="form-cnontrol">
                    <label>Autor: </label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>

                <div className="form-cnontrol">
                    <label>Descrição: </label>
                    <textarea name="description" placeholder="Digite sua descrição" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </div>

                <div className="form-cnontrol">
                    <select onChange={(e) => setSelect(e.target.value)} value={select}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Estudos">Estudos</option>
                        <option></option>
                    </select>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default BookList
