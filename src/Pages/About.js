import React from 'react'

export default function About() {
  return (
    <>
      <div className="about flex">
        <div className="ab">
          <h2> Who are we</h2>
          <p>The story of 4 Jahreszeiten began in 1985 with a small store located in Vienna, Austria and with one clear mission: to celebrate and empower women through exquisite clothing and refined accessories. Today, we praise you for the exciting journey of trust and style. By closely listening and embracing your desires, it is a pleasure to invite you to your new online shopping destination. We proudly dedicate ourselves to shaping the world in which every woman feels the comfort and inspiration needed to develop and express her personal sense of style. Clothes and accessories are extensions that color the day of modern women. For this reason, partners with esteemed brands, such as Max Mara, Marina Rinaldi, Laurèl, Liu Jo, Coccinelle, Fabiana Filippi, Faliero Sarti and many more, who set high standards in crafting unique designs, using premium fabrics.</p>
        </div>
        <div className="ba">
          <img src={require('../img/101.jpg')} />
        </div>
      </div>
      <div className="system flex">
        <div className="sy1">
          <h2>Free Shipping</h2>
          <p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum</p>
        </div>
        <div className="sy2">
          <h2>Secure Payments</h2>
          <p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum</p>
        </div>
        <div className="sy3">
          <h2>Support Customer</h2>
          <p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque enim summo bono fruitur, id est voluptate barbarorum</p>
        </div>
      </div>
    </>
  )
}
