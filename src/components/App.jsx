import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProverbsPage from './ProverbsPage';
import SettingsPage from './SettingsPage';

class App extends Component {
    state = {}

    getResults = () => {
        const { currentLanguage } = this.state;
        fetch(`/pretend-api/results-${currentLanguage}.json`)
            .then(res => res.json())
            .then(data => this.setState({ proverbs: data.results }));
    }

    render() {
        return (
            <Switch>
                <Route path="/" exact component={ProverbsPage} />
                <Route path="/settings" component={SettingsPage} />
            </Switch>
        );
    }
}

export default App;
