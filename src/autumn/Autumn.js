import React from 'react'
import Card from '../components/Card'
import Drawer from '../components/Drawer'


function Autumn(){
   const [items,setItems] = React.useState([])
   const [cartItems, setCartItems] = React.useState([])
   const [searchValue, setSearchValue] = React.useState('')
   const [cartOpened, setCartOppened] = React.useState(false)
 
   React.useEffect(() =>{
    fetch('https://61610e44faa03600179fbc04.mockapi.io/items').then((res) => {
      return res.json();
    })
    .then((json) =>{
      setItems(json);
    })
  }, [] );
  
  const onAddToCart = (obj) => {
    setCartItems( prev => [...prev, obj]);
  }
  
  const onChangeSearchInput = (event) => {
    setSearchValue();  
   }


  return (
    // <div className="wrapper clear">
    
    
    <div className="content p-40 ">

    <div className="d-flex align-center justify-between mb-40">
         <h1>Осенние Туры</h1>
         <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input onChange={onChangeSearchInput} placeholder="Поиск..." />
         </div>
         </div>

       <div className="d-flex flex-wrap">
       {
         items.map((item, index) => (            
              <Card
              key = {index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavourite = {() => alert('lj,fdbk d pfrkflrb')}
              onClick={() => onAddToCard(item) }
              />
            ))}
       </div>

    </div>
  // </div>

  );
}

export default Autumn;