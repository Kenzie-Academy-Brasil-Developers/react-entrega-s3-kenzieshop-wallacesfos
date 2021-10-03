import './style.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { Products } from '../Products';
import { useState } from 'react';



export default function Menu(props){

    const { setProdutos } = props

    const history = useHistory()

    const Logado = JSON.parse(localStorage.getItem("@name"))

    const [input, setInput] = useState('')

    function sair() {
        localStorage.clear()
        history.push('/login')
    }

    function cartPush() {
        history.push('/carrinho')
        window.location.reload()
    }

    const showProducts = (param) =>{
        let arr = []
        if(param.length === 0){
            setProdutos(Products)
        }else{
            Products.map((item) => {
                if(item.name.toLocaleLowerCase().includes(param.toLocaleLowerCase())){
                    arr.push(item)
                }
            })
            setProdutos(arr)
        }
    }

    
    return(
        <header className="nav">
            <h4 className="logo" onClick={() => history.push('/')}>KenzieShop</h4>
            <div className="form-pesquisa">
                <input type="text" placeholder="O que você está procurando?" className="pesquisa" onChange={(e) => setInput(e.target.value)}/>
                <button className="button-pesquisa" onClick={() => showProducts(input)}><SearchIcon /></button>
            </div>

            <div className="menu-right">
                <h4 className="cadastrese" onClick={Logado === null && history.push('/login')}><PersonIcon /> {Logado !== null? <p className="ola">Olá, {Logado} <Button className="btn-sair" onClick={sair}>Sair</Button></p> : "Faça Login ou cadastre-se"}</h4>
                <div>
                    <ShoppingCartIcon className="margin-left" onClick={() => cartPush()}/>
                </div>
            </div>
        </header>
    )
}