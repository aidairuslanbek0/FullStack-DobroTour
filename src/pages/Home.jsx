// import Card from '../components/Card'
import {Link} from 'react-router-dom'
import styles from './Pages.module.scss'

function Home({        
                       searchValue,
                       setSearchValue,
                       onChangeSearchInput,
                    //    onAddToFavourite,
                    //    onAddToCart 
                    }){
    return(
        <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Все Туры  4  Сезона</h1>
         {/* <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            {searchValue && 
            <img 
            onClick={() => setSearchValue('')}
            className="clear  cu-p" 
            src="/img/btn-remove.svg" 
            alt="Remove" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
         </div> */}
         </div>

         <div className="d-flex flex-wrap">
         
          <Link to="/autumn">
          <div className={styles.card}>
             <img width={200} height={240} src="/img/photos/autumn.jpg" alt="Photo" />
             <h3 className="text-uppercase">Осенние Туры</h3>
         </div>
          </Link>

          <Link to="/winter">
          <div className={styles.card}>
             <img width={200} height={240} src="/img/photos/winter.jpg" alt="Photo" />
             <h3 className="text-uppercase">Зимние Туры</h3>
         </div>
          </Link>

          <Link to="/spring">
          <div className={styles.card}>
             <img width={200} height={240} src="/img/photos/spring.jpg" alt="Photo" />
             <h3 className="text-uppercase">Весенние Туры</h3>
         </div>
          </Link>

          <Link to="/summer">
          <div className={styles.card}>
             <img width={200} height={240} src="/img/photos/summer.jpg" alt="Photo" />
             <h3 className="text-uppercase">Летние Туры</h3>
         </div>
          </Link>




           
          {/* {
          items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item,index) => (            
              <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavourite = {(obj) => onAddToFavourite(item)}
              onPlus={(obj) => onAddToCart(item) }
              />
            ))} */}

         </div>

    </div>
    )
}

export default Home;