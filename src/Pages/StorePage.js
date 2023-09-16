import {useHistory} from  'react-router-dom'
import Product from  "../Product/Product";
import { useEffect } from 'react';

const StorePage=()=>{
    const history=useHistory(false)

    const userLoggedIn=false;

    useEffect(()=>{
        if(!userLoggedIn){
            history.push('/login')
        }
    },[userLoggedIn,history])

    return (
        <Product/>
    )
}
export default StorePage;