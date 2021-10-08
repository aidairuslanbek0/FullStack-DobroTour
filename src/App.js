function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img className="mr-15" width={60} height={60} src="/img/logo.png" alt="Logo" />
        <div >
          <h3 className="text-uppercase">Dobro Tour</h3>
          <p>Лучшие туры по Кыргызстану</p>
        </div>
        </div>
       
        <ul className="d-flex">
          <li className="mr-30 ">
            <img width={18} height={18}  src="/img/cart.svg" alt="Cart" />
            <span>3500 сом</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content p-40 ">
        <h1>Все Туры</h1>

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
           <h3>Зимние Туры</h3>
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
           <h3>Весенние Туры</h3>
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
           <h3>Летние Туры</h3>
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

export default App;
