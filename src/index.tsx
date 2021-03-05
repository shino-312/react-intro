import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import moment from "moment"

const App = () => {
    const [currentDisp, setCurrentDisp] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setCurrentDisp(moment().format("YYYY/MM/DD hh:mm:ss"))
        }, 1000)
    })

    return (
        <div>
            Today is {currentDisp}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
