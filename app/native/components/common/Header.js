import React from "react";
import {
  StyleSheet,
  Text,
  Navigator,
} from "react-native";

// import NavigationBar from "react-native-navbar";
// import SideMenu from "react-native-side-menu";


const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#8E44AD",
  },
  icon: {
    color: "#FFFFFF",
  },
});

// function Header() {
//   const rightButtonConfig = {
//     title: <Text style={styles.icon}>&#9776;</Text>,
//     handler: () => alert("hello!"),
//   };

//   const titleConfig = {
//     title: "Reading Challenge",
//     tintColor: "#FFFFFF",
//   };

//   return (
//     <NavigationBar
//       title={titleConfig}
//       leftButton={rightButtonConfig}
//       style={styles.navbar}
//     />
//   );
// }

class NavigationBar extends Navigator.NavigationBar {
  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.display === false) {
        return null;
      }
    }

    return super.render();
  }
}

module.exports = NavigationBar;
// module.exports = Header;
