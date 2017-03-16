var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require('../components/Main');
var Home = require("../components/Home");
var PrompContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerone' header="Player One" component={PrompContainer} />
      <Route path='playertwo/:playerone' header="Player Two" component={PrompContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

module.exports = routes;