import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from "@mui/material/internal/svg-icons/Add";
import ListItem from "./ListItem";
import './todolist.css';



const App = () => {

    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    useEffect(() => {
        document.title = "To Do List App";
    })

    const newEntryEvent = (e) => {
        setItem(e.target.value);
    }

    const additionEvent = () => {
        setNewItem((prev) => {
            return [...prev, item];
        })
        setItem("");
    }

    return (
        <>
            <div className="todolist-main-div">
                <div className="todolist-center-div">
                    <h1 className="todolist-h1">To Do List</h1>
                    <div className="input-area">
                        <input className="todolist-input" type="text" placeholder="Add an Item" value={item} onChange={newEntryEvent} />
                        <Button className="todolist-newBtn" onClick={additionEvent}>
                            <AddIcon />
                        </Button>
                    </div>
                    <div className="list-area">
                        <ol className="todolist-ol">
                            {
                                newItem.map((val, i) => {
                                    return (<ListItem
                                        key={i}
                                        value={val}
                                    />);
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;