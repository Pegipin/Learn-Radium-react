import React, {Component} from "react";
import Test from './components/Test.js'
import {StyleRoot} from 'radium'

class App extends Component {
    render() {
        return (
            <StyleRoot>
            <div>
                 <Test/>
             </div>
            </StyleRoot>
        )
    }
}

export default App;