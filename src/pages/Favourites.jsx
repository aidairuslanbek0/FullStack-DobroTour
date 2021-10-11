import Card from '../components/Card/index'

function Favourites({items}){
    return(
        <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Мои Закладки</h1>
         
         </div>

         <div className="d-flex flex-wrap">
         { items
           .map((item,index) => (            
              <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              favourited = {true}
              />
            ))}
         </div>

    </div>
    )
}

export default Favourites;