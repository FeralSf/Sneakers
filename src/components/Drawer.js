

function Drawer(){
    return(

        <div className="overlay" style={{ display: "none" }}> 




        <div className="drawer">
        <h2 className="d-flex mb-30 justify-between">
          Корзина
          <img className="cu-p" src="img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-item mb-20">
            <div
              style={{ backgroungImage: "url(./img/1.jpg" }}
              className="cartItemImg"
            ></div>


Погоди,звонят
дефиса не хватает в bgc-img
            <div className="mr-20 flex">
              <p className="mb-5">Мужкие кроссовки Nike Air Msx 270</p>
              <b>12 999 руб</b>
            </div>
            <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
          </div>
        </div>
      
      <div className="cartTotalBock">
        <ul>
          <li>
            <span>Итого</span>
            <div></div>
            <b>21 498 rub</b>
          </li>
          <li>
            <span>Налог5%</span>
            <div></div>
            <b>1074rub</b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ</button>
      </div>
    </div>
    </div>
        
        )
    }

export default Drawer;