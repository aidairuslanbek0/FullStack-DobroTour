import Card from '../components/Card'


function Autumn({items,
                       searchValue,
                       setSearchValue,
                       onChangeSearchInput,
                       onAddToFavourite,
                       onAddToCart 
                    }){
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
    )
}

export default Autumn;