// import {useState} from 'react'
// import React, { Component } from 'react';
import PrayerForm from "./components/PrayerForm.jsx"
import hands from "../src/assets/john-canada-BC3YZTY-H10-unsplash.jpg"
import Footer from "./components/Footer"



export default function Prayer(){
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
            <PrayerForm/>
        </main>
        <Footer/>
        </>

    )
}