//import {VscPassFilled, VscPass, VscError} from "react-icons/vsc";
import { useState } from "react";
import { TiDelete, TiTickOutline, TiTick } from "react-icons/ti";

function TodoIcon(props){

    const [isHovering, setIsHovering] = useState(false);

    if (props.tipo === "Delete"){
        return <TiDelete 
            size="40px" 
            color={isHovering ? "#ff4d4d": "#cc3333"}
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            />;
    }
    else if(props.tipo === "Todo completed"){
        return <TiTick 
            size="40px" 
            color={isHovering ? "#44c767": "#32a143"}
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            />;
    }
    else{
        return <TiTickOutline 
            size="40px"
            color="gray"
            style={{backgroundColor: isHovering ? "#cccccc" : "transparent",
            borderRadius: '50px'}}
            onMouseEnter={()=>setIsHovering(true)}
            onMouseLeave={()=>setIsHovering(false)}
            />;
    }
}

export {TodoIcon};