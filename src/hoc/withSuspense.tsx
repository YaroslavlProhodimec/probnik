
import React from "react";
import {Prealoder} from "../Components/common/Prealoder/Preloader";

export const withSuspense = (Component:any) => {

    return (props:any) => {
        return <React.Suspense fallback={<Prealoder/>}>
           <Component {...props}/>
        </React.Suspense>
    }
    }





