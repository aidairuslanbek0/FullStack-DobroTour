import React from 'react'
import Card from '../../../components/Card'
import AppContext from '../../../context'


function EasyAutumn(){
     const {
             items,
             searchValue,
             setSearchValue,
             onChangeSearchInput,
             onAddToFavourite,
             onAddToCart,
             isLoading
            }  = React.useContext(AppContext);
                     const renderItems = () => {
                        const filtredItems = items.filter((item) =>
                          item.title.toLowerCase().includes(searchValue.toLowerCase()),
                        ); 
                      
                        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
                          <Card
                            key={index}
                            onFavourite={(obj) => onAddToFavourite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            loading={isLoading}
                            {...item}
                          />
                        ));
                     };
    return(
        <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Осенние Туры</h1>
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

         <div className="d-flex flex-wrap">{renderItems()}</div>

    </div>
    )
}

export default EasyAutumn;