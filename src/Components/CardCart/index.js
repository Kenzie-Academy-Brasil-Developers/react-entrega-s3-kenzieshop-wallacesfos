import './style.css'

export default function CardCart(props){
    const {name, price, image} = props

    return(
        <div className="card">
            <img src={image} alt={name} className="product-images"></img>
            <p className="name-product">{name}</p>
            <h4 className="price">R${price.toFixed(2)}</h4>
            <p className="Vista">À vista no PIX</p>
        </div>
    )
}