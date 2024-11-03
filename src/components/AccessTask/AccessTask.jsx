import React from "react";
import "./AccessTask.css"

function AccessTask({title, completed, mymargin}) {
    return ( 
        <div className="task-container" style={{marginTop: mymargin}}>
            <div className="tasked">
                <h1 className="task-title">{title}</h1>
                <h1 className="check-task">Check</h1>
            </div>
            <h1 className="task-progress">{completed}</h1>
        </div>
    )
  }
export default AccessTask;