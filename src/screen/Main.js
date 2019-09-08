import React, {Component} from 'react';
import Header from '../component/Header';
import Navigation from '../component/Navigation';

const styles = {
    main: {
        width: '100%',
        height: '100%',
    }
}
class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <main style={styles.main}>
                    <Navigation />
                </main>
            </div>
        );
    }
}

export default Main;