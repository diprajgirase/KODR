import React, { useContext, useState } from 'react'
import { ImCross } from "react-icons/im";
import { MyNotes } from '../Context/NotesContext';

const NotesForm = () => {

    const { toggle, setToggle , setNotes ,notes} = useContext(MyNotes);

    const [formInput, setFormInput] = useState({
        title: "",
        description: ""
    })
    console.log(formInput);


   const submitHandler = (e) => {
        e.preventDefault();
        setNotes(e),
        title:e.title,
        description:e.description
    }

        // setToggle(!toggle)

    return (
        <div className="relative h-[90%] w-full bg-gradient-to-tr from-yellow-200 via-amber-300 to-orange-200 flex justify-center items-center p-4 abs">

            <div onClick={() => setToggle(!toggle)} className="absolute top-4 right-4 text-4xl">
                <ImCross />
            </div>

            <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-xl p-10 w-full max-w-3xl border border-amber-200">

                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Add a New Note 📝</h2>

                <form onSubmit={submitHandler} className="flex flex-col gap-6">

                    <input
                        className="p-4 text-lg rounded-lg border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none transition-all"
                        type="text"
                        placeholder="Enter title..."
                        onChange={(e) => setFormInput({ ...formInput, title: e.target.value })}
                        value={formInput.title}
                        name='title'
                    />

                    <input
                        onChange={(e) => setFormInput({ ...formInput, description: e.target.value })}
                        className="p-4 text-lg rounded-lg border border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-300 outline-none resize-none transition-all min-h-[250px]"
                        placeholder="Write your note here..."
                        value={formInput.description}
                        name='description'

                    ></input>

                    <button
                        type="submit"
                        className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white text-lg font-semibold py-4 rounded-lg shadow-md transition-all"
                    >
                        Save Note
                    </button>

                </form>


            </div>
        </div>
    )
}

export default NotesForm
