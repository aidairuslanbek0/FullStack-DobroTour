function Summer(){
    return (
      <div className="wrapper clear">
      
      <div className="content p-40 ">
        
      <div className="d-flex align-center justify-between mb-40">
         <h1>Летние Туры</h1>
         <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
         </div>
         </div>
        
         <div className="d-flex ">
         <div className="card">
           <img width={200} height={240} src ="img/photos/autumn.jpg" alt="witer" />
           <h3>Летние Туры</h3>
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
  
        <div className="card">
           <img width={200} height={240} src ="img/photos/winter.jpg" alt="witer" />
           <h3>Летние Туры</h3>
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
  
        <div className="card">
           <img width={200} height={240} src ="img/photos/spring.jpg" alt="witer" />
           <h3>Летние Туры</h3>
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
  
        <div className="card">
           <img width={200} height={240} src ="img/photos/summer.jpg" alt="witer" />
           <h3>Летние Туры</h3>
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
         </div>
  
      </div>
    </div>
  
    );
  }
  
  export default Summer;