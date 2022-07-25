import './App.css';
import Header from './components/screens/Header';
import Testimonial from './components/screens/Testimonial';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/screens/User';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route path ="/" exact component = {Testimonial}/>
                    <Route path = "/user/:id" exact component = {User} />
                </Switch>
            </>
        </Router>
    );
}

export default App;
