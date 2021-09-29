import React, { useState } from "react";
function app(){
    const [name, setname] = useState("");
    return(
        <div className="app">
            <h1>
                hola
            </h1>
            <div>
                <label htmlFor="name">nombre: </label>
                <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} />
            </div>
        </div>
    );
}

export default app;