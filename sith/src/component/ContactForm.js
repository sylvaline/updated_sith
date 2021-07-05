import React from 'react'

function ContactForm() {
    return (
        <div className="form_div">
            <form className="">
            <div className="form_style">
            <input type="text" placeholder="Name"  />
            </div>
            <div className="form_style">
            <input type="email" placeholder="Email"  />
            </div>
            <div className="form_style">
            <input type="phone" placeholder="Phone"  />
            </div>
            <textarea name=""cols="30" rows="10" placeholder="Message"></textarea>
            <div className="form_btn">
            <button>Send Message</button>
            </div>
        </form>
        </div>
    )
}

export default ContactForm
