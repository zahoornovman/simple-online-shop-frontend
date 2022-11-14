import { useSelector } from "react-redux"
import { selectMerchandise } from '../../store/selectors'

//components
import { Tshirt } from "../../component/Tshirt";

import './home.css'

export function Home(){

    const merchandise = useSelector(selectMerchandise);
    //console.log(merchandise);

    return (
        <div className="body">
            <div className="tshirt-display">
            {merchandise.map(
                (tshirt)=> <Tshirt key={tshirt.id} tshirt={tshirt}/>)}
            </div>
        </div>
    )
}