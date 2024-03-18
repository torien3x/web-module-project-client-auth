import axios from "axios";
import { useHistory } from 'react-router-dom'
import React, { useState} from "react";

const AddFriend = () => {
    const { push } = useHistory()
    const [form, setForm] = useState({
        name:'',
        age:'',
        email:'',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:3000/api/friends', form, {
            header: {
                authorization: token
            }
        })
            .then(resp => {
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (<div>
        <h2>AddFriend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} id="name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} id="age" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} id="email" />
            </div>
            <button>Submit</button>
        </form>
        
    </div>)
  }

  export default AddFriend