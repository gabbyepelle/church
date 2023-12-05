import {useState} from 'react'
import React, { Component } from 'react';
import hands from "../src/assets/john-canada-BC3YZTY-H10-unsplash.jpg"
import Footer from "./components/Footer"



export default function Prayer(){
    // const [formData, setFormData] = useState({firstName: "", lastName: "", request:""})

    // function handleChange(event){
    //     const {name, value} = event.target
    //     setFormData(prevFormData=>{
    //         return{
    //             ...prevFormData,
    //             [name]: value
    //         }
    //     })

    // }
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    
      class PrayerForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = { firstName: "", lastName: "", request: "" };
        }
    }
     const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "prayerForm", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };

      const handleChange = e => this.setState({ [e.target.name]: e.target.value });

      const { firstName, lastName, request } = this.state;


    return(
        <>
        <header style={{backgroundImage : `url(${hands})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
         <div className="header-content">
        {/* <span>
        <blockquote>Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.</blockquote>
        <cite> - Philippians 4:6  </cite>
        </span> */}
        </div>
        </header>
        <main className="prayerForm">
        <span>
        <blockquote>Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.</blockquote>
        <cite> - Mark 11:24 </cite>
        </span> 
            <h1>Prayer Request</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-control">
                <label htmlFor="firstName">First Name: </label>
                <input type="text"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={firstName}
                />
                </div>
                <div className="form-control">

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" 
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                />
                </div>
                <div className="form-control">
                    <label className="textLabel" htmlFor="request">How can we pray for you?</label>
                    <textarea 
                    name="request" 
                    id="request" 
                    value={request}
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    >
                    </textarea>
                </div>
                <button>Submit</button>
            
            </form>
        </main>
        <Footer/>
        </>

    )
}