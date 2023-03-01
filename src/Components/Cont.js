import React from 'react'

export default function Cont() {
    return (
        <>
            <div className='con'>
                <div className='cont flex'>
                    <div className='ona flex'>
                        <div className='ic'><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div><h1>Office Address</h1>
                        <p>Maypole Crescent 70-80<br /> Upper St Norwich NR2 1LT</p></div>
                    </div>
                    <div className='twa flex'>
                        <div className='ic'><i class="fa fa-envelope" aria-hidden="true"></i></div>
                        <div><h1> Email us directly</h1>
                        <p>usermail@gmail.com</p></div>

                    </div>
                    <div className='tha flex'>
                        <div className='ic'><i class="fa fa-phone" aria-hidden="true"></i></div>
                        <div><h1> Phone</h1>
                        <p>+(426) 742 26 44<br /> +(224) 762 442 32</p></div>
                    </div>
                   

                </div>
                <div className='info '>
                    <form>
                    <h1> Get In Touch</h1>
                    <p>Have a question or just want to say hi? We'd love to hear from you.</p>
                    <div><span> <input type="text" placeholder='Your Name'></input> <input placeholder='Your Email Address'></input></span></div>
                    <div><input  placeholder='Subject'/></div>
                    <div><input className='mg' placeholder='Write message'/></div>
                    
                   <div className='chk'> <span><input type='checkbox'/><h4> I agree to the Terms & Conditions </h4> </span>
                    <button type='email'>  Send Your Messages </button></div>
                    </form>
                </div>
               
                <div className='frame'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.051813521555!2d85.34462204999998!3d27.69372045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c8d6a0639%3A0x99903dada8289577!2sTinkune%20Park!5e0!3m2!1sen!2snp!4v1670401026575!5m2!1sen!2snp" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
        </>
    )
}
