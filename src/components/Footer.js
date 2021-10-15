function Footer(){
    return (
        <div className="footer d-flex">
         <div><h3>Наши контакты</h3></div>
        <div className="contacts">
        {/* <a href="tel:+996995055185">Позвонить</a> */}
        <a href="https://api.whatsapp.com/send/?phone=996502111109" target="_blank"
   
   >WhatsApp</a>

            
         <a className="insta" href="https://www.instagram.com/dobrotour.kg/" target="_blank">
        
        <img className="d-flex" width={40} height={40} src="/img/insta.svg" alt="Instagram" />
        </a>
      
                </div>
        
        </div>
    );
}

export default Footer;