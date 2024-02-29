import React from 'react'
import "./sqlsecpage.css";
import image from "./akash-blog.webp"
import autogpt from './autogpt.webp';
import img2 from "./blog-poster.png"
import img4 from "./react-signals.webp"
import img3 from "./interviewgpt-poster.png"
const Sqlsecpart = (props) => {
  return (
    <div className='header'>
        <div className='infopart'>
            <div className='userinfo'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div><img style={{ borderRadius: '50%' }} src={image} alt="" width={50} height={50} /></div>
                    <div style={{ display: 'block',marginLeft:'10px' }}>
                        <div style={{ fontSize: '25px' }}>Akash</div>
                        <div style={{ fontSize: '10px' }}>Engineer Lead</div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginRight: '1px' }}>
                        <p>{props.dur}</p>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <div>Tags:</div>
                    <div className='stagbox'>Genrative Ai</div>
                    <div className='stagbox'>OpenAi</div>
                    <div className='stagbox'>GPT3.5Turbo</div>
                    <div className='stagbox'>Text-to-SQL</div>
                </div>
                <hr />
                <div className='information'>
                        <h1>Introduction</h1>
                        <p style={{fontSize:'20px'}}>
                            {props.intro}
                        </p>
                        <div className='challenges'>
                            <h2>{props.hchallenge}</h2>
                            <p style={{fontSize:'17px'}}> {props.pchallenge}</p>
                            <div style={{margin:'10px'}}>
                                <div style={{fontSize:'17px',margin:'10px'}}><span>{props.fph}</span>{props.fpi}</div>
                                <div style={{fontSize:'17px',margin:'10px'}}><span>{props.fpha}</span> {props.fpia}</div>
                                <div style={{fontSize:'17px',margin:'10px'}}><span>{props.fphb}</span>{props.fpib}</div>
                            </div>

                        </div>
                        <div className='high-level'>
                            <h2>{props.highsol}</h2>
                            <p style={{fontSize:'17px'}}><span>{props.spheader}</span> {props.spinfo}</p>
                            <div style={{margin:'10px'}}>
                                <div style={{fontSize:'15px',margin:'10px'}}><span>{props.sph}</span>{props.spi}</div>
                                <div style={{fontSize:'15px',margin:'10px'}}><span>{props.spha}</span> {props.spia}</div>
                                <div style={{fontSize:'15px',margin:'10px'}}><span>{props.sphb}</span> {props.spib}</div>
                            </div>
                        </div>

                </div>
                <div className='authorinfo'>
                    <div>
                        <img src={image} alt="" width={300} />
                    </div>
                    <div style={{margin:'20px'}}>
                        <div><h2>Akash Kumar Pavadashetti</h2></div>
                        <div>Engineering Lead</div>
                        <div style={{margin:'20px 0'}}>
                        Senior Full Stack Engineer with experience in designing architecture and schema
                                        of an application. Well versed with Python, Django, React and AWS services. A good communicator who
                                        takes ownership in what he does.
                        </div>

                       
                        <div style={{display:'flex',flexWrap:'wrap',margin:'10px 0'}}>
                                <div>Tags:</div>
                                <div className='stagbox'>Python Scripting</div>
                                <div className='stagbox'>Django</div>
                                <div className='stagbox'>WxPython</div>
                                <div className='stagbox'>React</div>
                                <div className='stagbox'>Redux</div>
                                <div className='stagbox'>Javascript</div>
                                <div className='stagbox'>Mysql</div>
                                <div className='stagbox'>Redis</div>
                        </div>
                        
                    </div>
                </div>

            </div>
                    
        </div>
        <div className='blogsinfo'>
            <div style={{height:'auto',width:'400px', boxShadow:"0 0 35px rgba(0, 0, 0, 0.1)"}}>
                <div style={{textAlign:'center',padding:'10px',borderBottom:'1px solid',margin:'5px'}}>
                    More from Author
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={autogpt} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>AutoGPT, the new disruptive kid on the AI block!</div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={img2} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>The Fine Art of Tuning: Parameter-Efficient Fine-Tuning</div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={img3} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>InterviewGPT: Transforming Recruitment Through Cutting-Edge AI-Driven Interviews</div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={img4} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>Introduction to react signals</div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={img2} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>The new disruptive kid on the AI block!</div>
                </div>
                <div style={{display:'flex'}}>
                    <div><img src={autogpt} alt="" width={100} height={50}/></div>
                    <div style={{margin:"0 10px"}}>AutoGPT, the new disruptive kid on the AI block!</div>
                </div>
            </div>
         
        </div>
    </div>
  )
}

export default Sqlsecpart