import Banner from '../../images/banner.png'
import "./style.css"
import Card from '../Cards'

export default function Loja(props){
    const {produtos} = props

    return(
        <div className="main">
            <div className="Container">
                <img src={Banner} alt="Banner" className="banner" />
                <div className="products">
                    <h4 className="container-products-title">Produtos</h4>
                    <div className="products-cards">
                        {produtos.map((item, index) => {
                            return <Card key={index} name={item.name} price={item.price} image={item.image} item={item}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}