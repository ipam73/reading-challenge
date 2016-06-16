const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#FBFBFB',
    padding: 20,
  },
  name: {
    color: '#946199',
    paddingBottom: 5,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    marginLeft: 10,
  },
});

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text style={styles.name}>Your name</Text>
        <Text
          onPress={() => this.props.onItemSelected('Home')}
          style={styles.item}>
          Home
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('About')}
          style={styles.item}>
          About
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Support')}
          style={styles.item}>
          Support
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Logout')}
          style={styles.item}>
          Logout
        </Text>
      </ScrollView>
    );
  }
};
