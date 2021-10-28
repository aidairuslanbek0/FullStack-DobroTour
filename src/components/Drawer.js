import React from 'react'
import {useCart} from './hooks/useCart'

function Drawer({ onClose,onRemove, items = []}){

  const  {totalPrice} =  useCart()
  // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

  
    return(
        <div className="overlay ">
         <div className="drawer">
           <h2 className="d-flex justify-between mb-30 ">Корзина
           <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
           </h2>

            {
              items.length > 0 ? (
             <div>
                   <div className="items">         
              {items.map((obj) => (
          <div  key={obj.id}
          className="cartItem d-flex align-center justify-around mb-20 ">

          <div 
          style={{backgroundImage: `url(${obj.imageUrl})`
            }} 
          className="cartItemImg"></div>
          
           <div className="mr-20">
             <p className="mb-5">{obj.title}</p>
             <b>{obj.price} сом</b>
           </div>
           <img 
           onClick={() => onRemove(obj.id)} 
           className="removeBtn" 
           src="/img/btn-remove.svg" alt="Remove" />
       </div>

          ))}

         </div>
           <div className="cartTotalBlock">
           <ul>
              <li className="d-flex align-end mb-20">
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice} сом</b>
              </li>
            </ul>
            <a href="https://api.whatsapp.com/send/?phone=996502111109" target="_blank"  >
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
            </a>
           </div>
               </div>
          
         ) : ( 

      <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Empty cart" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотяб один турб чтоб сделать покупку</p>
      <button onClick={onClose} className="greenButton">
      <img src="/img/arrow.svg" alt="Arrow" />
       Вернуться назад
      </button>
      </div>

         )}       

        </div>
       </div>

      
    )
}

export default Drawer;