import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInput = ({ target: { name, value } }) => {
        setForm({...form, [name]: value })
     }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send("service_3bncnz9", "template_riosk7t",
                {
                    from_name: form.name,
                    to_name: "Nivindu Lakshitha",
                    from_email: form.email,
                    to_email: "nivindulakshitha@gmail.com",
                    message: form.message
                },
                "O21cL1VZ5v6FSk0lO"
            )

            setForm({
                name: '',
                email: '',
                message: '',
            })

            alert("Your message was sent to Nivindu Lakshitha, Thank you!")
        } catch (error) {
            console.log(error);
            alert("Something went wrong, please try again!")
        } finally { 
            setLoading(false);
        }        
     }

    return (
        <section className="c-space my-20">
            <div className="relative h-screen flex items-center justify-center align-middle flex-row">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 h-screen w-full" />

                <div className="contact-container scale-75">
                    <h3 className="head-text">
                        Let&apos;s talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am always open to discussing new projects, new opportunities to be part of.
                    </p>

                    <form method="post" ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" onChange={handleInput} value={form.name} className="field-input" placeholder="Nivindu Lakshitha" required />
                        </label>
                        <label htmlFor="email" className="space-y-3">
                            <span className="field-label">E-mail Address</span>
                            <input type="email" name="email" onChange={handleInput} value={form.email} className="field-input" placeholder="nivindulakshtha@gmail.com" required />
                        </label>
                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea rows={3} name="message" onChange={handleInput} value={form.message} className="field-input" placeholder="I am looking forward to working with you." required />
                        </label>

                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            
                            <img src="/assets/arrow-up.png" alt="send" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact