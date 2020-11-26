import React from "react"

export const withSuspence = (Component) => {
    return (props) => {
        debugger;
        <React.Suspense fallback={"Page is loading..."}>
            <Component {...props}/>
        </React.Suspense>
    }
}
