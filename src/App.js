import React from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Middle from './components/Middle'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Autumn from './pages/Autumn'
import Winter from './pages/Winter'
import Spring from './pages/Spring'
import Summer from './pages/Summer'
import AppContext from './context'
import EasyAutumn from './components/categories/easy/Autumn'
import MiddleAutumn from './components/categories/middle/Autumn'
import HardAutumn from './components/categories/hard/Autumn'
import EasyWinter from './components/categories/easy/Winter'
import MiddleWinter from './components/categories/middle/Winter'
import HardWinter from './components/categories/hard/Winter'
import EasySpring from './components/categories/easy/Spring'
import MiddleSpring  from './components/categories/middle/Spring'
import HardSpring from './components/categories/hard/Spring'
import EasySummer from './components/categories/easy/Summer'
import MiddleSummer from './components/categories/middle/Summer'
import HardSummer from './components/categories/hard/Summer'
import Orders from './pages/Orders'


function App() {
  
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favourites, setFavourites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true);

  console.log(cartItems);

  React.useEffect(()=>{
   async function fetchData(){

    const cartRespons = await axios.get('https://61610e44faa03600179fbc04.mockapi.io/cart')
    const favouriteRespons = await axios.get('https://61610e44faa03600179fbc04.mockapi.io/favourite')
    const itemsRespons = await axios.get('https://61610e44faa03600179fbc04.mockapi.io/items')  
    
    setIsLoading(false)

    setCartItems(cartRespons.data)
    setFavourites(favouriteRespons.data)
    setItems(itemsRespons.data)       
   }
   fetchData()
   }, [] );

const onAddToCart =  async (obj) => {
  try{
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))){
      axios.delete(`https://61610e44faa03600179fbc04.mockapi.io/cart/${obj.id}`);
           setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } 
    else{
      const {data} = await axios.post('https://61610e44faa03600179fbc04.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, data]);
    }  
  } catch(error){
    alert('Не удалось добавить в карзину')
  }
}

const onRemoveItem = (id) => {
  console.log(id);
  axios.delete(`https://61610e44faa03600179fbc04.mockapi.io/cart/${id}`);
  setCartItems( (prev) => prev.filter(item => item.id !== id));
}

const onAddToFavourite = async (obj) => {
  try{
    if(favourites.find((favObj) => favObj.id === obj.id)){
      axios.delete(`https://61610e44faa03600179fbc04.mockapi.io/favourite/${obj.id}`);
      // setFavourites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    }
    else{
      const {data} = await axios.post('https://61610e44faa03600179fbc04.mockapi.io/favourite', obj);
      setFavourites((prev) => [...prev, data]);
    }
   
  }  catch (error){
        alert('Не удалось добавить в понравившиеся')
  }
}

const onChangeSearchInput = (event) => {
  setSearchValue(event.target.value);
}

const isItemAdded = (id) => {
  return cartItems.some((obj) => Number(obj.id) === Number(id));
};

  return (
    <AppContext.Provider value = {{
                                    items,
                                    cartItems,
                                    favourites,
                                    isItemAdded,
                                    onAddToFavourite,
                                    onAddToCart,
                                    setCartOpened,
                                    setCartItems,
                                    searchValue,
                                    isLoading,
          
    }}>
      <div className="wrapper clear ">
    
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
      <Middle />
      <Home />
    </Route>

    <Route path="/autumn" exact>
      <Autumn  />
    </Route>

    <Route path="/easyAutumn" exact>
      <EasyAutumn />
    </Route>

    <Route path="/middleAutumn" exact>
      <MiddleAutumn />
    </Route>

    <Route path="/hardAutumn" exact>
      <HardAutumn />
    </Route> 

   

    <Route path="/winter" exact>
      <Winter />
    </Route>

    <Route path="/easyWinter" exact>
      <EasyWinter />
    </Route>

    <Route path="/middleWinter" exact>
      <MiddleWinter />
    </Route>

    <Route path="/hardWinter" exact>
      <HardWinter />
    </Route>    

    <Route path="/spring" exact>
      <Spring />
    </Route>

    <Route path="/easySpring" exact>
      <EasySpring />
    </Route>

    <Route path="/middleSpring" exact>
      <MiddleSpring />
    </Route>

    <Route path="/hardSpring" exact>
      <HardSpring />
    </Route>    

    <Route path="/summer" exact>
      <Summer />
    </Route>

    <Route path="/easySummer" exact>
      <EasySummer />
    </Route>

    <Route path="/middleSummer" exact>
      <MiddleSummer />
    </Route>

    <Route path="/hardSummer" exact>
      <HardSummer />
    </Route> 

   
    
    <Route path="/favourites" exact>
      <Favourites />
    </Route>
      
    <Route path="/orders" exact>
      <Orders />
    </Route>
      
      <Footer/>
    </div>
   
    </AppContext.Provider>
  );
}

export default App;
