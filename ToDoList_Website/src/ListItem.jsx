import React, { useState } from "react";
import DeleteIcon from "@mui/material/internal/svg-icons/Cancel";


const ListItem = (props) => {
    const [line, setLine] = useState(false);

    const strikeThrough = () => {
        setLine(true);
    }

    return (
        <>
            <div className="todolist-todo-style">
                <span onClick={strikeThrough}>
                    <DeleteIcon className="deleteIcon" />
                </span>
                <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
                    {props.value}
                </li>
            </div>

        </>
    );
}

export default ListItem;