import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width / 1080;
const windowHeight = Dimensions.get('window').height / 2020;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profile_view: {
    padding: 15,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#e2e2e2',
  },
  profile_img: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  title: {
    flex: 3,
    marginLeft: 20
  }

});

export default styles;
