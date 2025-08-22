import { createContext, useState } from "react";

export const MyNotes = createContext();

export const MyNotesProvider = ({ children }) => {
         const [toggle, setToggle] = useState(true);
         const [notes, setNotes] = useState([])

    return (
        <MyNotes.Provider value={{toggle, setToggle}}>
        { children }
        </MyNotes.Provider >
    )
}