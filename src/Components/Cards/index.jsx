import './style.css'
import { useDispatch } from "react-redux";
import addToCartThunk from '../../store/modules/cart/thunks';

export default function Card(props){
    const {name, price, image, item} = props

    const dispatch = useDispatch();


    const handleAdd = (param) => {
        dispatch(addToCartThunk(param))
    };

    return(
        <div className="card">
            <img src={image} alt={name} className="product-images"></img>
            <p className="name-product">{name}</p>
            <h4 className="price">R${price.toFixed(2)}</h4>
            <p className="Vista">À vista no PIX</p>
            <button className="btn-cards" onClick={() => handleAdd(item)}>Adicionar ao carrinho</button>
        </div>
    )
}