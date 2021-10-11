import React from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Video from './components/Video'
import Home from './pages/Home'
import Favourites from './pages/Favourites'


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
    axios.get('https://61610e44faa03600179fbc04.mockapi.io/favourite').then((res) =>{
      setFavourites(res.data)
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
   <Route path="/" exact>
      <Video />
      <Home items = {items} 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            onChangeSearchInput = {onChangeSearchInput}
            onAddToFavourite = {onAddToFavourite}
            onAddToCart = {onAddToCart}
      />

    </Route>
    
    <Route path="/favourites" exact>
      <Favourites items={favourites}               
      />
    </Route>
      
    </div>
   
  );
}

export default App;
