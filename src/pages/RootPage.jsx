import { Outlet } from "react-router-dom";
import Header from "../Layout/Header";
import { Helmet } from "react-helmet";

const Root = () => {
  const description =
    "Patryk Siemieniec portfolio showing skills, projects, technologies and personal information";
  const keywords =
    "patryk, siemieniec, portfolio, internship project, weatherapp, psweatherapp, patryksiemieniecportfolio, netlify, engineerng project, irregular, irregular verbs quiz, verbs quiz, junior, frontend developer, junior frontend developer, react, react developer, angular, angular developer, bachelor of computer science, cv, github, linkedin, patryk.siemieniec99@gmail.com, https://github.com/PatrykSiemieniec, https://www.linkedin.com/in/patryksiemieniec99/, patryksiemieniec99, PatrykSiemieniec ";
  return (
    <>
      <Helmet>
        <title>Patryk Siemieniec Portfolio</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
