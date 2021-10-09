import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Video from './components/Video'

const arr = [
  { title: "Осенние Туры",
    price: "3500 сом",
    imageUrl: '/img/photos/autumn.jpg'
  },
  { title: "Зимние Туры",
    price: "3400 сом",
    imageUrl: '/img/photos/winter.jpg'
  },
  { title: "Весенние Туры",
    price: "3300 сом",
    imageUrl: '/img/photos/spring.jpg'
  },
  { title: "Летние Туры",
    price: "3200 сом",
    imageUrl: '/img/photos/summer.jpg'
  },
  
];

function App() {
 
  return (
    <div className="wrapper clear">
    <Header />
    <Video />
    <Drawer/>
      <div className="content p-40 ">
         <div className="d-flex align-center justify-between mb-40">
         <h1>Все Туры</h1>
         <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
         </div>
         </div>

         <div className="d-flex">
           
          {
          arr.map((obj) => (            
              <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log() }
              />
            ))}

         </div>

    </div>
    </div>
   
  );
}

export default App;
