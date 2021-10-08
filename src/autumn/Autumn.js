function Autumn(){
  return (
    <div className="wrapper clear">
    
    <div className="content p-40 ">
      <h1>Осенние Туры</h1>

       <div className="d-flex ">
       <div className="card">
         <img width={200} height={240} src ="img/photos/autumn.jpg" alt="witer" />
         <h3>Осенние Туры</h3>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>3500 сом</b>
           </div>
             <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
             </button>             
         </div>
      </div>

      <div className="card">
         <img width={200} height={240} src ="img/photos/winter.jpg" alt="witer" />
         <h3>Осенние Туры</h3>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>3500 сом</b>
           </div>
             <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
             </button>             
         </div>
      </div>

      <div className="card">
         <img width={200} height={240} src ="img/photos/spring.jpg" alt="witer" />
         <h3>Осенние Туры</h3>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>3500 сом</b>
           </div>
             <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
             </button>             
         </div>
      </div>

      <div className="card">
         <img width={200} height={240} src ="img/photos/summer.jpg" alt="witer" />
         <h3>Осенние Туры</h3>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>3500 сом</b>
           </div>
             <button className="button">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
             </button>             
         </div>
      </div>
       </div>

    </div>
  </div>

  );
}

export default Autumn;