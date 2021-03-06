import React from 'react'
import { Link } from 'react-router-dom'

import "../steyls/service.css"

function Serviche() {
  return (
    <section className="service">
      <div className="container">
        <div className="service_text">
          <h1>Our services</h1>
        </div>

        <div className="service_box">

          <div className="service_smile_box">
            <div className="service_icon">
              <i className="fa-solid fa-cubes"></i>
            </div>
            <h2>25 000+</h2>
            <p>Muvaffaqiyatli loyihalar</p>
          </div>

          <div className="service_smile_box">
            <div className="service_icon">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <h2>25 000+</h2>
            <p>Muvaffaqiyatli loyihalar</p>
          </div>

          <div className="service_smile_box">
            <div className="service_icon">
            <i className="fa-brands fa-cc-amazon-pay"></i>
            </div>
            <h2>25 000+</h2>
            <p>Muvaffaqiyatli loyihalar</p>
          </div>

        </div>
          <Link className='service_btn2' to="/Register">
            <button className='service_btn'>Order a project</button>
          </Link>

      </div>
    </section>
  )
}

export default Serviche