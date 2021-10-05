import "./style.css"
import { useSelector } from "react-redux";
import Card from '../CardCart'
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";



export default function Cart(){

    const { cart } = useSelector((state) => state);

    const [frete, setFrete] = useState('');
    const [endereco, setEndereco] = useState({})
    const [certo, setCerto] = useState(false)
    const [totalFrete, setTotalFrete] = useState(10)

    function calcularFrete(){
        axios.get(`https://viacep.com.br/ws/${frete}/json/`).then(res =>{
            setEndereco(res.data)
            setCerto(true)
            setTotalFrete(Math.floor(Math.random() * (50 - 10) + 10).toFixed(2))

        }).catch(() => {
            alert("Endereço Inválido!")
            setCerto(false) 
        })
    }


    useState(() => {
        setTotalFrete(Math.floor(Math.random() * (50 - 10) + 10).toFixed(2))

    }, [endereco])


    return (
        <div className="price-Total">
            <h4> Preço Total: R${cart.reduce((a, b) => a + b.price ,0).toFixed(2)}</h4>
            <div className="Container-Cart">
                <div className="frete">
                    <h1>Calcular Frete</h1>
                    <div className="forms-frete">
                        <TextField label="CEP" variant="outlined" onChange={e => setFrete(e.target.value)} margin="normal" />
                        <Button variant="contained" className="btn-calcular" onClick={calcularFrete}>Calcular</Button>
                        {certo && 
                        <div className="informacoes">
                            <h4 className="title-information">Informações</h4>
                            <p>rua: {endereco.logradouro}</p>
                            <p>bairro: {endereco.bairro}</p>
                            <p>Localidade: {endereco.localidade}</p>
                            <span className="span">Frete: R${totalFrete}</span>
                        </div>
                        }
                    </div>
                </div>
                <div className="container-cards">
                    {cart.map((item, index) => {
                        return <Card key={index} name={item.name} price={item.price} image={item.image} />

                    })}
                </div>
            </div>
        </div>
    )
}