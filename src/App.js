import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Video from './components/Video'


function App() {
  
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favourites, setFavourites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(()=>{
    axios.get('https://61610e44faa03600179fbc04.mockapi.io/items').then((res) =>{
      setItems(res.data)
    })
    axios.get('https://61610e44faa03600179fbc04.mockapi.io/cart').then((res) =>{
      setCartItems(res.data)
    })
   }, [] );

const onAddToCart = (obj) => {
  axios.post('https://61610e44faa03600179fbc04.mockapi.io/cart', obj);
  setCartItems( prev => [...prev, obj]);
}

const onRemoveItem = (id) => {
  console.log(id);
  axios.delete(`https://61610e44faa03600179fbc04.mockapi.io/cart/${id}`);
  setCartItems( (prev) => prev.filter(item => item.id !== id));
}

const onAddToFavourite = (obj) => {
  axios.post('https://61610e44faa03600179fbc04.mockapi.io/favourite', obj);
  setFavourites( prev => [...prev, obj]);
}

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
}


  return (
    <div className="wrapper clear">
    
    {cartOpened && 
    <Drawer  
    items={cartItems}
    onClose={() => setCartOpened(false)} 
    onRemove={onRemoveItem}
    />}

    <Header 
    onClickCart={() => setCartOpened(true)}
     />

    <Video />
    
      <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Все Туры</h1>
         <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            {searchValue && 
            <img 
            onClick={() => setSearchValue('')}
            className="clear  cu-p" 
            src="/img/btn-remove.svg" 
            alt="Remove" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
         </div>
         </div>

         <div className="d-flex flex-wrap">
           
          {
          items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => (            
              <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavourite = {(obj) => onAddToFavourite(item)}
              onPlus={(obj) => onAddToCart(item) }
              />
            ))}

         </div>

    </div>
    </div>
   
  );
}

export default App;
