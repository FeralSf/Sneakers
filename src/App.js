import React from "react";
import "macro-css";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr =[
{title: 'Мужские кроссовки Nike', price: 12999, imageUrl: '/img/1.jpg'},
{title: 'Мужскиекроссовки Nike Blazer', price: 15600, imageUrl: '/img/2.jpg'},

{title: 'Мужскиекроссовки Nike Mid', price: 14990, imageUrl: '/img/3.jpg'},

{title: 'Мужскиекроссовки Nike Max', price: 13990, imageUrl: '/img/4.jpg'}
];

function App() {
  return (
    <div className="wrapper clear">
      

        <Drawer/>   

      <Header />
   
      <div className="content p-40">
        <div className="d-flex align-center mb40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
        {arr.map((obj)=>(
           <Card
           title={obj.title} price={obj.price} imageUrl={obj.imageUrl}  />
        ))}
         
        </div>
      </div>
    </div>
  );
}

export default App;
