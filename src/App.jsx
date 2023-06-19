import './App.css'
import BookList from './componentes/BookList'
import axios from "./axios-config"
import { useState, useEffect } from 'react'
import BookIten from './componentes/BookIten'
import Search from './componentes/Searche'

function App() {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  const baseUrl = "https://livraria-backend.vercel.app"

  const getBooks = async() => {
    const {data} = await axios.get(`/books`);

    setBooks(data)
  }

  useEffect(() => {
    getBooks()
  }, [])



  const addList = async(title, name, description, select, image) => {

    if(!title || !name || !description || !select || !image){
      return
    }


    try{
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("name", name);
      formData.append("description",description)
      formData.append("select", select)


      const {data : newBooks} = await axios.post(`/books`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
      },
      })
  
      setBooks([...books, newBooks])
    }catch(error){
      console.log(error)
    }


  }

  const removBook = async(id) => {
    await axios.delete(`/books/${id}`)

    const newTodo = [...books];
    
    const filterTodo = newTodo.filter(todo => todo.id !== id ? todo : null)



    setBooks(filterTodo);
  }

  const completeTodo = (id) => {
    const newTodo = [...books]
    newTodo.map((book) => book.id === id ? book.isCompleted = !book.isCompleted : book)

    setBooks(newTodo)
  }

  return (
   <div className='app'>
    <h1>Adicione seu livro!!</h1>
      <div className='todo-list'>
        <BookList addList={addList}/>
        <Search search={search} setSearch={setSearch}/>
        {books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase())).map((book) => (
          <BookIten key={book.id} book={book} removBook={removBook} completeTodo={completeTodo}/>
        ))}
      </div>
   </div>
  )
}

export default App
