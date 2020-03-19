import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProverbsPage from "./ProverbsPage";
import SettingsPage from "./SettingsPage";

import ProverbsContext from "../contexts/proverbs-context";
import LanguagesContext from "../contexts/languages-context";

/*
- Show the english proverbs (in ProvebsPage) when the app loads - use getResults()
- Change the currentLanguage in the SettingsPage - it should change the state in App.jsx
- The language <select /> should have the currentLanguage selected by default (defaultValue)
- Changing the currentLanguage should trigger the ProverbsPage to load the proverbs for that language
- Add translations to i18n/translations.js and use them in both pages (on the titles and links)
*/

class App extends Component {
  state = {
    proverbs: [],
    currentLanguage: "en"
  };

  componentDidMount() {
    this.getResults();
  }

  getResults = () => {
    const { currentLanguage } = this.state;
    fetch(`/pretend-api/results-${currentLanguage}.json`)
      .then(res => res.json())
      .then(data => this.setState({ proverbs: data.results }));
  };

  setCurrentLanguage = currentLanguage => {
    this.setState({ currentLanguage }, () => {
      this.getResults();
    });
  };

  render() {
    return (
      <LanguagesContext.Provider
        value={{
          currentLanguage: this.state.currentLanguage,
          setCurrentLanguage: this.setCurrentLanguage
        }}
      >
        <ProverbsContext.Provider value={this.state.proverbs}>
          <Switch>
            <Route path="/" exact component={ProverbsPage} />
            <Route path="/settings" component={SettingsPage} />
          </Switch>
        </ProverbsContext.Provider>
      </LanguagesContext.Provider>
    );
  }
}

export default App;
