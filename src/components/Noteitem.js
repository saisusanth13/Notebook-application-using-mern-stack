import React from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext } from 'react';


const Noteitem =(props) =>{
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className='col-md-3 mb-3'>
            <div className="card my-3 bg-black">
                <div className="card-body">
                    <div className="">
                        <h5 className="card-title text-white text-xl font-serif font-bold"> {note.title}</h5>
                        <p className="card-text font-serif text-white font-thin text-sm ">{note.description}</p>
                        <i className="fa-solid fa-trash-can text-white ml-1 pt-2 cursor-pointer mr-4" onClick={() => { deleteNote(note._id) }} alt="Delete"></i>
                        <i className="far fa-edit mx-2  text-white ml-1 pt-2 cursor-pointer" onClick={()=>{updateNote(note)}}></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Noteitem