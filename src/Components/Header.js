import React from 'react'


export default function Header() {
    let changeIcon = function(icon) {
        icon.classList.toggle("fa fa-angle-up")
    }
    changeIcon =  (icon) => icon.classList.toggle("fa fa-angle-up")
    return (
        <>
          <header> 
            <div className='con'>
                <div className='header flex'>
                    <div className='left flex'>
                        <span> <i class="fa fa-volume-control-phone" aria-hidden="true"></i> +123 4567 8910 </span>
                        <span> <i class="fa fa-car" aria-hidden="true"></i> Track Your Order </span>
                    </div>
                    <div className='right flex'>
                        <span> <i class="fa fa-usd" aria-hidden="true"></i> USD <i class="fa fa-angle-down" aria-hidden="true" onClick={() =>changeIcon(this)}></i> </span>
                       
                       
                       

                        <span> Select Language  <i class="fa fa-angle-down" aria-hidden="true"></i> </span>
                    </div>
                </div>
            </div>
            </header>
            

        </>
    )
}
