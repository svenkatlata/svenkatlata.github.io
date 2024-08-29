import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {   
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        emailjs
            .sendForm('service_profile', 'template_profile', form.current, {publicKey: 'jPoZBVICu7VzsBiup',})
            .then(
                () => {
                console.log('SUCCESS!');
                form.current.reset();
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
    };
      
  return (
    <div id="contact" className="p-8 lg:px-20 lg:pt-4 lg:pb-28 text-theme-dark-blue">
        <h2 className="mt-8 mb-20 text-center lg:text-4xl text-3xl font-light">
            Let's Connect
        </h2>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/2 max-w-xl">
                <h6 className="mb-2 font-semibold">Location</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.9050953727!2d78.24323113439742!3d17.412608642828793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1724838950381!5m2!1sen!2sin" className="border-spacing-1 w-full h-full lg:pr-20 pb-20 mb-20" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-full max-w-xl lg:w-1/2">
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="user_name" className="block font-semibold mb-2">Name</label>
                        <input type="text" id="user_name" name="user_name" className="w-full px-4 py-2 border border-theme-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-yellow" placeholder="Your Name" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="block font-semibold mb-2">Email</label>
                        <input type="email" id="user_email" name="user_email" className="w-full px-4 py-2 border border-theme-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-yellow" placeholder="Your Email" required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                        <textarea id="message" name="message" className="w-full h-40 px-4 py-2 border border-theme-dark-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-yellow" placeholder="Your Message" required/>
                    </div>
                    <button
                     type="submit"
                    className="w-full bg-theme-dark-blue text-white font-semibold py-2 px-4 rounded-lg hover:bg-theme-yellow hover:text-theme-dark-blue transition duration-200">
                    Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact