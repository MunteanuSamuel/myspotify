import React from "react";
import '../PagesStyle/About.css'


const Contact = () => {

    return (
        <div>
            <h1>Contact Page</h1>
            <form className="contact__form" action="mailto:munteanusamuel@gmail.com" method="post" encType="text/plain">
                    <label>Name</label>
                    <input type="text" name="Name"></input>
                    <label>Email</label>
                    <input type="email" name="email"></input>
                    <label>Subscribe to our Newsletter</label>
                    <input type="checkbox" name="Subscribe"></input>
                    <label>Send a message</label>
                    <textarea name="mesage" rows="10" cols="30"></textarea>
                    <input className="submit__button" type="submit" name=""></input>
            </form>
        </div>
    )
};

export default Contact;