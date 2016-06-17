const React = require('react-native');
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Component,
} = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    paddingTop: 80,
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#FBFBFB',
    padding: 20,
  },
  name: {
    color: '#946199',
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 15,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 15,
    marginLeft: 15,
  },
});

module.exports = class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text style={styles.name}>Pamela Martinez</Text>
        <Text
          onPress={() => this.props.onItemSelected('Homepage', 'Charm City Readers', this.props.navigator)}
          style={styles.item}
        >
          Home
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('About', 'About the Challenge', this.props.navigator)}
          style={styles.item}
        >
          About the Challenge
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Support', 'Support', this.props.navigator)}
          style={styles.item}
        >
          Support
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Landingpage', '', this.props.navigator)}
          style={styles.item}
        >
          Logout
        </Text>
      </ScrollView>
    );
  }
};
