import React from "react";
import "./card.css";
import img1 from "./firstpage1.png";
import im2 from "./firstpage2.png";
import img3 from "./firstpage3.png";
import img4 from "./firstpage4.png";
import img5 from "./firstpage6.webp";
import img12 from "./firstipage5.png"
import { useNavigate } from "react-router";


const ServiceCards = () => {
    const nav=useNavigate();
  return (
    <div className="servicecard">
       <div className="container" style={{flex:1}}>

            <div onClick={()=>{  nav('/sql') }} className="card">
                <img src={img1} alt="Sample Image" />
                <div className="card-content">
                    <h2>Speaking SQL: Turning Natural Language into Database Dialogues</h2>
                    <p>This is a sample description for the card. You can replace it with your own content.</p>
                </div>
            </div>
            <div  onClick={()=>{  nav('/beyondbasics') }} className="card">
                <img src={im2} alt="Sample Image" />
                <div className="card-content">
                    <h2>Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback</h2>
                    <p>Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models...</p>
                </div>
            </div>
            <div onClick={()=>{  nav('/fineart') }} className="card">
                <img src={img3} alt="Sample Image" />
                <div className="card-content">
                    <h2>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</h2>
                    <p>Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine...</p>
                </div>
            </div>
            <div className="card">
                <img src={img12} alt="Sample Image" />
                <div className="card-content">
                    <h2>Transforming Recruitment Through Cutting-Edge AI-Driven Interviews and Expert Candidate Evaluation</h2>
                    <p>In the ever-evolving landscape of technology, the recruitment process is not immune to transformation. Enter InterviewGPT, a product by Bluetick Consultants is a revolutionary tool designed to empower recruiters with AI-driven...</p>
                </div>
            </div>
            <div className="card">
                <img src={img4} alt="Sample Image" />
                <div className="card-content">
                    <h2>Speaking SQL: Turning Natural Language into Database Dialogues</h2>
                    <p>This is a sample description for the card. You can replace it with your own content.</p>
                </div>
            </div>
           
        </div>
        <div style={{margin:30,flex:0.7}}>
            <div className="tagbox" >
                <div className="tag-header">
                   <h3>More Tags</h3> 
                </div>
                
               <div style={{display: 'flex', justifyContent: "space-around", flexWrap: 'wrap'}}>
                    <div className="tag-item">
                            <a href="">openAi</a>
                        </div>
                        <div className="tag-item">
                            <a href="">T3 stack</a>
                        </div>
                        <div className="tag-item">
                            <a href="">React</a>
                        </div>
                        <div className="tag-item">
                            <a href="">Chrome extension</a>
                        </div>
                        <div className="tag-item">
                            <a href="">PostgreSQL</a>
                        </div>
                        <div className="tag-item">
                            <a href="">Python-Django</a>
                        </div>
                        <div className="tag-item">
                            <a href="">Ruby</a>
                        </div>
                        <div className="tag-item">
                            <a href="">AWS Lambda</a>
                        </div>
                        <div className="tag-item">
                            <a href="">NLP</a>
                        </div>
                        <div className="tag-item">
                            <a href="">Macgine Learning</a>
                        </div>
                        <div className="tag-item">
                            <a href="">Python</a>
                        </div>
               </div> 
            </div>

        </div>
      
    </div>
  );
};

export default ServiceCards; 
