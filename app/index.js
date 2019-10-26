import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import Popular from './components/Popular'
// .Component// statte // lifecycle // UI
function Button(props) {
    return (
        <button>{props.name}</button>
    )
}
class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'))