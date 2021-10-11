import {Link} from 'react-router-dom'


function Header(props){
    return(
        <header className="d-flex justify-between align-center p-40">

           <Link to="/">
        <div className="d-flex align-center">       
        <img className="mr-15" width={60} height={60} src="/img/logo.png" alt="Logo" />
        <div >
          <h3 className="text-uppercase">Dobro Tour</h3>
          <p>Лучшие туры по Кыргызстану</p>
        </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li 
          onClick={props.onClickCart} 
          className="mr-20 cu-p">
            
            <img width={18} height={18}  src="/img/cart.svg" alt="Корзина" />
            <span>3500 сом</span>
          </li>
          <li>
           <Link to="/favourites">
           <img className="cu-p mr-20" width={18} height={18} src="/img/heart.svg" alt="Закладки" />
           </Link>
          </li>
          <li>
            <img className="cu-p mr-20" width={18} height={18} src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
    )
}

export default Header;