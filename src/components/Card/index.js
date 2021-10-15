import React from 'react'
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader"
import AppContext from '../../context';



function Card({
  id, 
  onFavourite, 
  imageUrl, 
  title, 
  price, 
  onPlus, 
  favourited = false, 
  // added = false,
  loading = false

  }){
  const {isItemAdded} = React.useContext(AppContext)
  const [isFavourite, setIsFavourite] = React.useState(favourited);
 

  const onClickPlus = () =>{    
    onPlus({id, imageUrl, title, price});
    
  }

  const onClickFavourite = () => {
    onFavourite({id,imageUrl,title,price});
    setIsFavourite(!isFavourite)
  }

    return(
        <div className={styles.card}>
          {
            loading ? 
            <ContentLoader 
                speed={2}
                width={230}
                height={350}
                viewBox="0 0 230 350"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"   
                >
                <rect x="0" y="0" rx="10" ry="10" width="200" height="180" /> 
                <rect x="0" y="204" rx="5" ry="5" width="200" height="20" /> 
                <rect x="4" y="242" rx="5" ry="5" width="130" height="20" /> 
                <rect x="0" y="287" rx="5" ry="5" width="90" height="30" /> 
                <rect x="160" y="277" rx="10" ry="10" width="40" height="40" />
                </ContentLoader> 
                
                : 

                <>
              
         
          <img width="100%" height={240} src={imageUrl} alt="Sneakers" />
          <h3>{title}</h3>
          <div className="d-flex justify-around ">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            
            {onFavourite && (
            <div   onClick={onClickFavourite}>
              <img src={isFavourite ? 'img/liked.svg' : 'img/unliked.svg'} alt="Unliked" />
            </div>
             )}
            {onPlus && (
              <img width={32} height={32} 
                // className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
                alt="Plus"
              />
            )}
            
          </div>
          

          
                </>
          }
           
        </div>
    )
} 

export default Card;