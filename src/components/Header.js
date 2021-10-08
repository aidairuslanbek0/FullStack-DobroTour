function Header(){
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img className="mr-15" width={60} height={60} src="/img/logo.png" alt="Logo" />
        <div >
          <h3 className="text-uppercase">Dobro Tour</h3>
          <p>Лучшие туры по Кыргызстану</p>
        </div>
        </div>
       
        <ul className="d-flex">
          <li className="mr-30 ">
            <img width={18} height={18}  src="/img/cart.svg" alt="Cart" />
            <span>3500 сом</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
    )
}

export default Header;