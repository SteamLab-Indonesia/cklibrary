import React, {Component} from 'react';
import Header from '../component/Header';
import Navigation from '../component/Navigation';

class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main>
                    <Navigation />
                </main>
            </div>
        );
    }
}

export default Main;