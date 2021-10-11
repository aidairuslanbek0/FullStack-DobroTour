import React from 'react'
import styles from './Card.module.scss'

function Card({onFavourite, imageUrl, title, price, onPlus, favourited = false}){
  
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);
 

  const onClickPlus = () =>{
    onPlus({ imageUrl, title, price});
    setIsAdded(!isAdded)
  }

  const onClickFavourite = () => {
    onFavourite({imageUrl,title,price})
    setIsFavourite(!isFavourite)
  }

    return(
        <div className={styles.card}>
           <img width={200} height={240} src={imageUrl} alt="Image" />
           <h3>{title}</h3>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} сом</b>
             </div>
             <div  onClick={onClickFavourite}>
                 <img 
                 src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
                 alt="Unliked"/>
                </div>
               
                 <img 
                 className={styles.plus} 
                 onClick={onClickPlus}  
                 src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
                 alt="Plus" />
               
           </div>
        </div>
    )
} 

export default Card;