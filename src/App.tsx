import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    render() {
        return (
            <ul >
                {[1,2,3,4,5].map(i => <li>{i}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))