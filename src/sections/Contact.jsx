import { useRef, useState } from "react";

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

    
    // service_3bncnz9
    const handleSubmit = () => {

        setForm({
            name: '',
            email: '',
            message: '',
        })
     }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">
                        Let&apos;s talk
                    </h3>
                    <p className="text-lg text-white-600 mt-3">
                        I am always open to discussing new projects, creative ideas or new opportunities to be part of. Feel free to connect with me. 
                    </p>

                    <form ref={formRef} onSubmit={() => { handleSubmit();  setLoading(true)}} className="mt-12 flex flex-col space-y-7">
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
                            <textarea rows={5} name="message" onChange={handleInput} value={form.message} className="field-input" placeholder="Hi, I am John Doe. I am looking forward to working with you. I am open to discussing new projects, creative ideas or new opportunities to be part of. Feel free to connect with me." required />
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