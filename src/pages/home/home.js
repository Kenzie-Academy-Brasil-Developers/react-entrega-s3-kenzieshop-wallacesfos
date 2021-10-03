import { useState } from 'react'
import Loja from '../../Components/Loja'
import Menu from '../../Components/Menu'
import { Products } from '../../Components/Products'



export default function Home(){
    const [produtos, setProdutos] = useState(Products)


    return (
        <>
            <Menu produtos={produtos} setProdutos={setProdutos} />
            <Loja produtos={produtos} setProdutos={setProdutos} />
        </>
    )
}