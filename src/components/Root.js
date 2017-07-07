import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MaterialInput from "../containers/MaterialInput";
import Adjust from "../containers/Adjust";
import Calculate from "../containers/Calculate";
import Modal from "../containers/Modal";

import Navigation from "./Navigation";

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <main>
        <Navigation />
        <Modal title="Stiffness matrix" content="Some text" show={true} />
        <section
          className="flex"
          style={{
            margin: "60px auto",
            width: "960px"
          }}
        >
          <Route exact path="/" component={MaterialInput} />
          <Route exact path="/adjust" component={Adjust} />
          <Route path="/calculate" component={Calculate} />
        </section>
      </main>
    </Router>
  </Provider>;

export default Root;