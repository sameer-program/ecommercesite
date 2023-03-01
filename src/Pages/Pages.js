import React from 'react'
import { useState } from 'react'

export default function Pages() {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="pag flex">
        <div className="shp">
          <h1>Shopping Information </h1>
          <h4>How Can I Integrate To My Current Tool Stack?  <span>-</span> </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor tempus sit id commu tincidunt. Tempor etiam at in nisl ac tortor, ut vitae fermentum. Nibh eget blandit suscipit ornare donec eget semper orci. Malesuada tortor neque, posuere egtnhet viverra auctor ac egestas tellus. Turpis venenatis, viverra nisi aliquet diam odio condimentum. In vel consectetur auctor interdum pulvinar tortor. Duis turpis in sit</p>

          <h3>How Can I Integrate To My Current Tool Stack?  <span onClick={() => setShow(!show)}> + </span>  </h3>
          {
            show ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor tempus sit id commu tincidunt. Tempor etiam at in nisl ac tortor, ut vitae fermentum. Nibh eget blandit suscipit ornare donec eget semper orci. Malesuada tortor neque, posuere egtnhet viverra auctor ac egestas tellus. Turpis venenatis, viverra nisi aliquet diam odio condimentum. In vel consectetur auctor interdum pulvinar tortor. Duis turpis in sit</p> : null
          }
         

        </div>
        <div className="pay">
          <h1> Payment Information </h1>
          <h4>How Can I Integrate To My Current Tool Stack?  <span>-</span></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor tempus sit id commu tincidunt. Tempor etiam at in nisl ac tortor, ut vitae fermentum. Nibh eget blandit suscipit ornare donec eget semper orci. Malesuada tortor neque, posuere egtnhet viverra auctor ac egestas tellus. Turpis venenatis, viverra nisi aliquet diam odio condimentum. In vel consectetur auctor interdum pulvinar tortor. Duis turpis in sit</p>
          <h3>How Can I Integrate  To My Current Tool Stack?  <span onClick={() => setShow(!show)}> + </span>  </h3>
          {
            show ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor tempus sit id commu tincidunt. Tempor etiam at in nisl ac tortor, ut vitae fermentum. Nibh eget blandit suscipit ornare donec eget semper orci. Malesuada tortor neque, posuere egtnhet viverra auctor ac egestas tellus. Turpis venenatis, viverra nisi aliquet diam odio condimentum. In vel consectetur auctor interdum pulvinar tortor. Duis turpis in sit</p> : null
          }
         
        </div>
      </div>

    </>
  )
}
