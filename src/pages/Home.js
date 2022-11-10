import { useSelector } from "react-redux"
import { selectMerchandise } from '../store/selectors'


import { Tshirt } from "../component/Tshirt";

export function Home(){

    const merchandise = useSelector(selectMerchandise);
    //console.log(merchandise);

    return (

        <div className="tshirt-display">
        {merchandise.map(
            (tshirt)=> <Tshirt key={tshirt.id} tshirt={tshirt}/>)}
        </div>
    )
}