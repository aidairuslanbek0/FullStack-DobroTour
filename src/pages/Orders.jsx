import axios from 'axios'
import React from 'react'
import Card from '../components/Card/index'
import AppContext from '../context'

function Orders(){
    const { onAddToFavourite, onAddToCart } = React.useContext(AppContext)

    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);

     
    React.useEffect(() => {
        (async () => {
           try{
            const {data} = await axios.get('https://61610e44faa03600179fbc04.mockapi.io/oders')
            setOrders(data.map((obj) => obj.items).flat());
            setIsLoading(false)
           } catch(error){
               alert('Ошибка при запросе заказа') 
               console.error(error)
           }
            // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));           
 
        })()

    }, []);

    return(
        <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Мои Заказы</h1>
         
         </div>

         <div className="d-flex flex-wrap">
         { (isLoading ? [...Array(3)] : orders).map((item,index) => (            
                     <Card
                            key={index}
                            // onPlus={(obj) => onAddToCart(obj)}
                            loading={isLoading}
                            {...item}
                      />
            ))}
         </div>

    </div>
    )
}

export default Orders;