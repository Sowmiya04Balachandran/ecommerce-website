import MainNavigation from "./MainNavigation"
import { Outlet } from "react-router-dom";
import classes from './Root.module.css';

const Root=()=>{
    return <>
    <MainNavigation/>
    <main className={classes.content}>
    <Outlet/>
    </main>
    </>
}
export default Root;