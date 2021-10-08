function Drawer(){
    return(
        <div style={{display: 'none'}} className="overlay ">
         <div className="drawer">
           <h2 className="d-flex justify-between mb-30 ">Корзина
           <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
           </h2>

         <div className="items"> 
         <div className="cartItem d-flex align-center justify-around mb-20 ">
            <div style={{backgroundImage: 'url(/img/photos/autumn.jpg)'}} className="cartItemImg"></div>
            
             <div className="mr-20">
               <p className="mb-5">Осенние Туры</p>
               <b>3500 сом</b>
             </div>
             <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
         </div>

         <div className="cartItem d-flex align-center justify-around mb-20 ">
            <div style={{backgroundImage: 'url(/img/photos/autumn.jpg)'}} className="cartItemImg"></div>
            
             <div className="mr-20">
               <p className="mb-5">Осенние Туры</p>
               <b>3500 сом</b>
             </div>
             <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
         </div>
         </div>

         <div className="cartTotalBlock">
         <ul>
            <li className="d-flex align-end mb-20">
              <span>Итого:</span>
              <div></div>
              <b>7500</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
         </div>
             
        </div>
       </div>

      
    )
}

export default Drawer;