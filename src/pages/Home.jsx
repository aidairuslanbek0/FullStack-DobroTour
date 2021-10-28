import {Link} from 'react-router-dom'
import styles from './Pages.module.scss'

function Home(){
    return(
        <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40 ">
         <h1>Все Туры  4  Сезона</h1>
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

         </div>
    </div>
    )
}

export default Home;