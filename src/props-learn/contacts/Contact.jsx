import '../contacts/contact.css'

export default function Contact() {
    return (
       
            <article className="contact-card">
                <div className="image-container">
                    <img src="src/assets/ava.jpg" className="image" alt="contact card" />    
                </div>
                <h2> Mr Whitaker</h2>
                <div className="info-group">
                    <img src="src/assets/icons8-email-48.png" className='info-group-image' alt="logo"/>
                    <p>mwwwwwww@gmail.com</p>
                </div>

                <div className="info-group">
                    <img src="src/assets/icons8-phone-50.png" className='info-group-image' alt="logo"/>
                    <p>+256 702483541</p>
                </div>    
            </article>
        
        
    )
    
}