import "./style.css"
import { useSelector } from "react-redux";
import Card from '../CardCart'



export default function Cart(){

    const { cart } = useSelector((state) => state);

    console.log(cart)

    return (
        <div className="price-Total">
            <h4> Preço Total: R${cart.reduce((a, b) => a + b.price ,0).toFixed(2)}</h4>
            <div className="Container-Cart">
                {cart.map((item, index) => {
                    return <Card key={index} name={item.name} price={item.price} image={item.image} />

                })}
            </div>
        </div>
    )
}