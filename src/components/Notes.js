import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useHistory } from 'react-router';

const Notes = () => {
    const context = useContext(noteContext);
    let history = useHistory();
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }else{
            history.push("/login")
        } 
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }

    const handleClick = (e)=>{
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Addnote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-transparent border-4 border-slate-300 ">
                        <div className="modal-header border-2 border-slate-300">
                            <h5 className="modal-title font-semibold text-white" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label font-semibold text-white">Title</label>
                                    <input type="text" className="form-control font-semibold text-black bg-slate-100 rounded-2xl" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label font-semibold text-white">Description</label>
                                    <input type="text" className="form-control font-semibold text-black bg-slate-100 rounded-2xl" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label font-semibold text-white">Tag</label>
                                    <input type="text" className="form-control font-semibold text-black bg-slate-100 rounded-2xl" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={2} required/>
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer border-2 border-slate-300">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3 ">
                <h2 className='text-5xl font-serif font-extrabold'>View Notes</h2>
                <div className="container mx-3">
                    {notes===0 && 'No Notes to Display!🔖'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes