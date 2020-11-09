import React from 'react';
import "./_Form.module.scss";
import axios from "axios";

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: document.getElementById("name").value,
            position: document.getElementById("position").value,
            goals: document.getElementById("goals").value,
            assists: document.getElementById("assists").value,
            img: document.getElementById("img").value
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        fetch("http://localhost:8080/create", fetchOptions)
            .then(response => response.json())
            .then(response => console.log(response))
    }
    return (
        <section>
            <form>
                <label htmlFor="name">Player:</label>
                <input id="name" type="text"/>
                <label htmlFor="position">Position:</label>
                <input id="position" type="text"/>
                <label htmlFor="goals">Goals:</label>
                <input id="goals" type="text"/>
                <label htmlFor="assists">Assists:</label>
                <input id="assists" type="text"/>
                <label htmlFor="img">Image:</label>
                <input id="img" type="text"/>
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                        Submit player
                </button>
            </form>
        </section>
    )
}

export default Form
