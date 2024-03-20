import b9 from '../pictures/b9.jpg';
import i1 from '../pictures/i1.jpg';
import i3 from '../pictures/i3.jpg';
import i2 from '../pictures/i2.png';
import tiktok from '../pictures/tiktok.png';
import insta from '../pictures/insta.jpg';
import li from '../pictures/in.png';
import fb from '../pictures/fb.png';
import pin from '../pictures/pintrest.png';
import { useState } from 'react';



export default function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('') ;
    const [message,setMessage] = useState('') ;

    // async function addmessage(ev){
    //     const data = new FormData();
    //     data.set('name', name);
    //     data.set('email', email);
    //     data.set('subject', subject);
    //     data.set('message', message);
    //     ev.preventDefault();
    //     const response = await fetch('http://localhost:4000/message' , {
    //         method: 'POST', 
    //         body: data,
    //         credentials: 'include',
    //     });
    //     if(response.ok){
    //         alert(response);
    //     } else{
    //         alert("Bad");
    //     }
    // }

    async function contact(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/contact',{
            method: 'POST',
        })
    }

    return(
       <section onClick={contact}>
            <div className="about_hero">
                <div className="discription">
                    <h1>You Can Contact Us</h1>
                    <h3>We are Always Ready to Help <br/>you to provide quality Service</h3>
                </div>
                <div className="home_img" >
                    <img src={b9}/>
                </div>
            </div>

            <div className='contact-container'>
                <div className='get-in-touch'>
                    <h1>Get in Touch</h1>
                    <p>Looking for a help? Fill the form and start a new adventure</p>
                    <hr/>
                    <h1>Headquaters</h1>
                    <div className='Headquaters'>
                        
                        <img src={i1}/>
                        <p>165, Weeraketiya Road, Walasmulla</p>
                    </div>

                    <h1>Phone</h1>
                    <div className='Headquaters'>
                        
                        <img src={i2}/>
                        <p>077-1243687  /  047-763864</p>
                    </div>


                    <h1>Support</h1>
                    <div className='Headquaters'>
                        
                        <img src={i3}/>
                        <p>help@gmail.com</p>
                    </div>


                    <h1>Follow</h1>
                    <div className='Headquaters'>
                        <img src={tiktok}/>
                        <img src={insta}/>
                        <img src={li}/>
                        <img src={fb}/>
                        <img src={pin}/>
                    </div>
                </div>

                <div className='tets-talk'>
                <h1>Let’s Talk</h1>
                    <p>Feel free to ask anything from us. we are always here to anwer</p>
                    <hr/>
                    <div className='name'>
                        <input placeholder='Your Name' value={name} onChange={ ev => setName(ev.target.value)}></input>
                        <input placeholder='Email' value={email} onChange={ ev => setEmail(ev.target.value)}></input>
                    </div>
                    <input placeholder='Subject'value={subject} onChange={ ev => setSubject(ev.target.value)}></input>
                    <textarea placeholder='How Can We Help?'value={message} onChange={ ev => setMessage(ev.target.value)}></textarea>
                    <div>
                        <button>Send Message</button>
                    </div>
                </div>
                
            </div>
       </section>
    )
}