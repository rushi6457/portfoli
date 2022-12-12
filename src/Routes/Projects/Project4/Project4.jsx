import React from 'react';
import "./Project4.css";
import gearbest from "./assets/gearbest-img.png";
import firstpost from "./assets/firstpost-img.png";
import naturebasket from "./assets/naturebasket-img.png"
import {AiOutlineTags} from "react-icons/ai"
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "./assets/js.png"
import css from "./assets/css.png"
import react from "./assets/react.png"
import json from "./assets/json.png"
import swiper from "./assets/swiper.png"
import html from "./assets/html.jpg"
import chakra from "./assets/chakra.jpg"
import gitproject from "./assets/gitproject.png"
import ipl from "./assets/ipl.png"
import { useState } from 'react';

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={gitproject} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Github profile search</h1>
                <p className='project-description'>This is the simple github username search mini project which was made individually by me. Here anyone can search profiles of github users.</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={react}></Image>
                            <Image className='stack-images' src={chakra}></Image>
                            <Image className='stack-images' src={css}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={swiper}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>This was a mini project so whole project was created by me where i have used Github API for search functionality and also used Chakra-UI for styling. </p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://velvety-blini-4aab7f.netlify.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/rushi6457/github-search" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;