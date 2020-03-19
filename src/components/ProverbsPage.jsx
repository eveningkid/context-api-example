import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguagesContext from "../contexts/languages-context";
import ProverbsContext from "../contexts/proverbs-context";
import translations from "../../i18n/translations";

const ProverbsPage = () => {
  const proverbs = useContext(ProverbsContext);
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <>
      <Link to="/settings">{translations[currentLanguage].settings}</Link>
      <h1>{translations[currentLanguage].proverbs}</h1>
      <ul>
        {proverbs.map(res => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
