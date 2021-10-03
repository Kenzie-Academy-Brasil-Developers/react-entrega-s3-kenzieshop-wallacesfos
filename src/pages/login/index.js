import { useHistory } from "react-router";
import LoginRegister from "../../Components/LoginRegister";
import Menu from "../../Components/Menu";


export default function Login(){

    const history = useHistory()

    if(JSON.parse(localStorage.getItem("@KS:token")) !== null){
        history.push(`/`)
    }
    return(
        <>
            <Menu />
            <LoginRegister />
        </>
    )
}