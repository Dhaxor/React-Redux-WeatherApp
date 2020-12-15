import React from 'react';
import { Sparklines,SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';


function calculate(data){
    let result=  Math.floor(data.reduce((total,amount)=> total + amount / data.length));
    return result;
}
export default (props) =>{

        return(
            <div>
                 <Sparklines height={20} width={100} data={props.data}>
                        <SparklinesLine color={props.color} />
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>

                    <div>
                        {calculate(props.data)} {props.unit}
                    </div>
            </div>
        )
}