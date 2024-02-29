import React from "react";
import "./footerpage.css";
import logo from "./b-logo.svg"
const Footer = () => {
  return (
    <footer>
      <div className="primarypart" >
        <p>Find out our cappabilities to match your requirements</p>
      </div>
        <div className="fullcolor">
        <div className="secondpart">
        <div className="firstdiv">
          <div style={{display:'inline'}}>
             <img src={logo} alt=""  width={200} height={70}/>
          </div>
          <div>Bluetick Consultants LLP</div>
          <div>contact@bluetickconsultants.com</div>
          <div>
                Glassdoor <br />
                4.2|
                <span
                style={{
                    border: "1px",
                    borderColor: "green",
                    fontSize: "15px",
                    width:'20px',
                    backgroundColor: "green",
                    margin:'3px'
                }}
                > *</span>
                <span
                style={{
                    border: "1px",
                    borderColor: "green",
                    fontSize: "15px",
                    width:'20px',
                    backgroundColor: "green",
                    margin:'3px'
                }}
                > *</span>
                <span
                style={{
                    border: "1px",
                    borderColor: "green",
                    fontSize: "15px",
                    width:'20px',
                    backgroundColor: "green",
                    margin:'3px'
                }}
                > *</span>
                <span
                style={{
                    border: "1px",
                    borderColor: "green",
                    fontSize: "15px",
                    width:'20px',
                    backgroundColor: "green",
                    margin:'3px'
                }}
                > *</span>
          </div>
          <div>
            logo
          </div>
        </div>
        <div className="firstdiv">
            <div style={{border:'1px solid green',width:'30px',height:'3px',backgroundColor:'green',marginTop:'10px'}}></div>
            <div><h2>Services</h2></div>
            <div>
                Remote Developers
            </div>
            <div>
                Product Development
            </div>
            <div>
                Digital Transformation
            </div>
        </div>
        <div className="firstdiv">
          <div style={{border:'1px solid green',width:'30px',height:'3px',backgroundColor:'green',marginTop:'10px'}}></div>
              <div><h2>RESOURCES</h2></div>
              <div>
                  Blogs
              </div>
              <div>
                  Case Studies
              </div>
        </div>
        <div className="firstdiv">
          <div style={{border:'1px solid green',width:'30px',height:'3px',backgroundColor:'green',marginTop:'10px'}}></div>
              <div><h2>COMPANY</h2></div>
              <div>
                  About us
              </div>
              <div>
                  Values
              </div>
        </div>
        <div className="firstdiv">
          <div style={{border:'1px solid green',width:'30px',height:'3px',backgroundColor:'green',marginTop:'10px'}}></div>
              <div> <h2>CAPABILITIES</h2></div>
              <div>
                  Front end engineering
              </div>
              <div>
                 Cloud & DevOps
              </div>
              <div>
                Web Framework
              </div>
              <div>
                Data Analytics & Visualization
              </div>
              <div>
                Databases
              </div>
              <div>
                Projects
              </div>
        </div>
      </div>
      <hr style={{margin:'30px'}}/>

      <div className="thirdpart" style={{display:'flex' ,justifyContent:'space-around',flexWrap:'wrap',marginBottom:'10px',color:'black'}}>
          
          <div style={{border:'1px solid black',borderRadius:'90%',padding:'15px',backgroundColor:'white'}}><i class="fab fa-facebook"></i></div>
          <div style={{border:'1px solid black',borderRadius:'90%',padding:'15px',backgroundColor:'white'}}><i class="fab fa-instagram"></i></div>
          <div style={{border:'1px solid black',borderRadius:'90%',padding:'15px',backgroundColor:'white'}}><i class="fab fa-quora"></i></div>
          <div style={{border:'1px solid black',borderRadius:'90%',padding:'15px',backgroundColor:'white'}}><i class="fab fa-twitter"></i></div>
          <div style={{border:'1px solid black',borderRadius:'90%',padding:'15px',backgroundColor:'white'}}><i class="fab fa-linkedin"></i></div>


        
      <div style={{padding:'10px',color:'white'}}>
                2024 @ All rights reserved by Bluetick Consultants LLP
        </div>
        
        
      </div>
        </div>
            
    </footer>
  );
};

export default Footer;
