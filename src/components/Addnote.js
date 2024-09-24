import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <h1 className='justify-center text-5xl font-serif font-extrabold'>Add Notes</h1>
      <div className="container my-3">
        <form>
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300 font-serif">Title</label>
            <input type="text" id="title" className="bg-black border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-serif" value={note.title} name='title' onChange={onChange}  minLength={5} required />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300 font-serif">Description</label>
            <input type="text" id="description" className="bg-black border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-wrap dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-serif" value={note.description} name='description' onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-6">
            <label htmlFor="tag" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300 font-serif">Tag</label>
            <input type="text" id="tag" className="bg-black border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-serif" name='tag' value={note.tag}  onChange={onChange} minLength={2} required />
          </div>
          
          <button type="submit" className="text-white bg-black hover:bg-green-100 rounded-lg text-sm  px-4 py-2.5 text-center font-semibold font-serif" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote