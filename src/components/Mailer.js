import React from "react"
import emailjs from 'emailjs-com'
function Mailer() {

    function sendEmail(e) {
        
        e.preventDefault();
        
        
        emailjs.sendForm('service_0c6rejk',
        'template_8duknm9'
        ,e.target,
        'user_PMoUj5Ot9ZZ7TWeoxWcR4'
        ).then(res=>{
            console.log(res);
            alert("Message sent successfully!");
        }).catch(err => console.log(err));
        e.target.reset();
    }


    return (
        <div id="contact" className="mailer">
            <center><h2>Get in touch</h2></center>
            <form className="mailer-details" onSubmit={sendEmail}>
                <div className="mailer_first">
                   <label>Name</label>
                   <input type='text' name='name' placeholder="Enter your name" />
                   <label>Email</label>
                   <input type='email' name='user_email' placeholder="Enter your email" />
                </div>
                <label>Message</label>
                <textarea name='message' rows='5' placeholder="Enter your message"/>
                <button type='submit' value='Send'>Send</button>
                
            </form>
        </div>
    )
}

export default Mailer
