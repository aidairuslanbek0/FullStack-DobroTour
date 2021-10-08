function Card(){
    return(
        <div className="card">
           <img width={200} height={240} src ="img/photos/winter.jpg" alt="witer" />
           <h3>Зимние Туры</h3>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>3500 сом</b>
             </div>
             <button className="favourite">
                 <img src="/img/heartunlike.svg" />
                </button>
               <button className="button">
                 <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
               </button>             
           </div>
        </div>
    )
} 

export default Card;