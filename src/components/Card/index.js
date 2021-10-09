import styles from './Card.module.scss'

function Card(props){
  
    return(
        <div className={styles.card}>
           <img width={200} height={240} src={props.imageUrl} alt="witer" />
           <h3>{props.title}</h3>
           <div className="d-flex justify-between align-center">
             <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{props.price} сом</b>
             </div>
             <button className={styles.favorite}>
                 <img src="/img/heartunlike.svg" />
                </button>
               <button className="button" onClick={() =>alert(123)}>
                 <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
               </button>             
           </div>
        </div>
    )
} 

export default Card;