import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
             <img src="../../../../public/images/contact.jpg" alt="Descripción de la imagen" />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Av. Apoquindo 2827, 7550268 Las Condes, Santiago, Chile.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> contacto@nosequenombreponer.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +56 2 600 9000</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM LINKDIN</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact