import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguagesContext from "../contexts/languages-context";
import translations from "../../i18n/translations";

const SettingsPage = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguagesContext);

  function onChangeLanguage(event) {
    setCurrentLanguage(event.target.value);
  }

  return (
    <>
      <Link to="/">{translations[currentLanguage].back}</Link>
      <h1>{translations[currentLanguage].settings}</h1>
      <select
        name="language"
        defaultValue={currentLanguage}
        onChange={onChangeLanguage}
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </>
  );
};

export default SettingsPage;
