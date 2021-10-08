import Card from '../components/Card'

function Autumn(){
  return (
    <div className="wrapper clear">
    
    <div className="content p-40 ">

    <div className="d-flex align-center justify-between mb-40">
         <h1>Осенние Туры</h1>
         <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
         </div>
         </div>

       <div className="d-flex ">
         <Card />
       </div>

    </div>
  </div>

  );
}

export default Autumn;