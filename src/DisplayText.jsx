import React, { useEffect }  from "react";

const DisplayText= function(props){

    useEffect(()=>{
        console.log("mounted text display")
        return (()=>{
            console.log("un-mounted")
        })
    },[])

    return(
        <>
        
        
        <p>
            Count is {props.value}

        </p>
        
        
        </>


    )

}

export default DisplayText;