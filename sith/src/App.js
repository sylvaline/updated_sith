import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Events from "./component/Events";
import DocumentResourceCentre from "./component/DocumentResourceCentre";
import LearningResourceCentre from "./component/LearningResourceCentre";
import Nav from "./component/Nav";
import Contact from "./component/Contact";
import OurInnovations from "./component/OurInnovations";
import CoWorking from "./component/CoWorking";
import About from "./component/About";
import AboutUser from "./component/AboutUser";
import Footer from "./component/Footer";
import PageLoading from "./component/PageLoading";
import StartupFunding from "./component/StartupFunding";
import InnovationSupport from "./component/InnovationSupport";


function App() {
  const [page_loading, setPage_loading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPage_loading(false);
    }, 100);
  });

  if (page_loading) {
    <PageLoading />;
  }

  return (
    <div>
      {page_loading ? (
        <PageLoading />
      ) : (
        <>
          {" "}
          <Nav />
          <div className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/events" component={Events} />
              <Route path="/our-innovations" component={OurInnovations} />
              <Route path="/about" component={About} />
              <Route path="/about-user" component={AboutUser} />
              <Route path="/co-working" component={CoWorking} />
              <Route path="/startup-funding" component={StartupFunding} />
              <Route path="/innovation-support" component={InnovationSupport} />
              <Route
                path="/document-resource-centre"
                exact
                component={DocumentResourceCentre}
              />
              <Route
                path="/learning-resource-centre"
                component={LearningResourceCentre}
              />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
