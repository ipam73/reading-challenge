var actions = require("../../../actions");

function requireAuth(nextState, replace) {
  if (!actions.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = {
  requireAuth,
}
