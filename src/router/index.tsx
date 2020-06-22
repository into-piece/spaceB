import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import route from "./config";
// eslint-disable-next-line react/display-name

const RouterConf = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <Switch key={location.pathname}>
                {route.map((item) => (
                  <Route
                    key={item.path}
                    exact
                    path={item.path}
                    component={(props: any) => <item.component {...props} />}
                  />
                ))}
              </Switch>
            </Suspense>
          );
        }}
      />
    </Router>
  );
};

export default RouterConf;
