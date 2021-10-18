import React from 'react'
import styles from './Pages.module.scss'
import {Link} from 'react-router-dom'

function Autumn(){
  return(
    <div className="content p-40 ">
    <div className="d-flex align-center justify-between mb-40">
    <h1>Осенние Туры </h1>
    <h1>Категории</h1>
    
    </div>

    <div className="d-flex flex-column flex-wrap">
    
     <Link to="/easyAutumn">
       <div className="d-flex">
       <div className={styles.card}>
        <img width={200} height={240} src="/img/photos/autumn.jpg" alt="Photo" />
        <h3 className="text-uppercase">Легкий Уровень</h3>
    </div>
       <span className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia quibusdam quae architecto. Autem, corrupti itaque? Ea voluptatibus rerum voluptates quis magni earum officiis libero error tempore, id possimus quisquam necessitatibus illum architecto perspiciatis mollitia numquam, consequuntur at, incidunt ipsum. Enim ex, cumque repudiandae tempora perspiciatis hic architecto obcaecati? Ad nemo esse eos repellendus qui, ullam error architecto aliquam ipsa iure cupiditate tempore, quis corporis fuga sed, sunt sint vel nihil dolorem culpa nostrum. Hic, optio tempora totam omnis ipsam nulla fugiat nam soluta iste quisquam libero sed est, pariatur autem cupiditate, voluptates obcaecati vitae. Aspernatur dignissimos tempora saepe dicta.</span>
       </div>
     
     </Link>

     <Link to="/middleAutumn">
     <div className="d-flex" > 
     <div className={styles.card}>
        <img width={200} height={240} src="/img/photos/winter.jpg" alt="Photo" />
        <h3 className="text-uppercase">Средний Уровень</h3>
    </div>
    <span className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia quibusdam quae architecto. Autem, corrupti itaque? Ea voluptatibus rerum voluptates quis magni earum officiis libero error tempore, id possimus quisquam necessitatibus illum architecto perspiciatis mollitia numquam, consequuntur at, incidunt ipsum. Enim ex, cumque repudiandae tempora perspiciatis hic architecto obcaecati? Ad nemo esse eos repellendus qui, ullam error architecto aliquam ipsa iure cupiditate tempore, quis corporis fuga sed, sunt sint vel nihil dolorem culpa nostrum. Hic, optio tempora totam omnis ipsam nulla fugiat nam soluta iste quisquam libero sed est, pariatur autem cupiditate, voluptates obcaecati vitae. Aspernatur dignissimos tempora saepe dicta.</span>
    </div>
     </Link>

     <Link to="/hardAutumn">
     <div className="d-flex" > 
     <div className={styles.card}>
        <img width={200} height={240} src="/img/photos/spring.jpg" alt="Photo" />
        <h3 className="text-uppercase">Тяжелый Уровень</h3>
    </div>
    <span className={styles.txt}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia quibusdam quae architecto. Autem, corrupti itaque? Ea voluptatibus rerum voluptates quis magni earum officiis libero error tempore, id possimus quisquam necessitatibus illum architecto perspiciatis mollitia numquam, consequuntur at, incidunt ipsum. Enim ex, cumque repudiandae tempora perspiciatis hic architecto obcaecati? Ad nemo esse eos repellendus qui, ullam error architecto aliquam ipsa iure cupiditate tempore, quis corporis fuga sed, sunt sint vel nihil dolorem culpa nostrum. Hic, optio tempora totam omnis ipsam nulla fugiat nam soluta iste quisquam libero sed est, pariatur autem cupiditate, voluptates obcaecati vitae. Aspernatur dignissimos tempora saepe dicta.</span>
    </div>
     </Link>




    </div>

</div>
  )
}

export default Autumn;
