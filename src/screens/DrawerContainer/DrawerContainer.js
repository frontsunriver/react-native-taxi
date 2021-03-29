import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        
        <View style={styles.container}>
          <View style={styles.profile_view}>
            <Image style={styles.profile_img} source={require('../../../assets/icon.png')}></Image>
            <Text style={styles.title}>TaxiCALL</Text>
          </View>
          <MenuButton
            title="PROFILE"
            source={require('../../../assets/icons/menu_profile.png')}
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="MAP"
            source={require('../../../assets/icons/menu_map.png')}
            onPress={() => {
              navigation.navigate('Map');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="NEWS"
            source={require('../../../assets/icons/menu_news.png')}
            onPress={() => {
              navigation.navigate('News');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="ORDER"
            source={require('../../../assets/icons/menu_order.png')}
            onPress={() => {
              navigation.navigate('Order');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="TARIFF"
            source={require('../../../assets/icons/menu_taxi.png')}
            onPress={() => {
              navigation.navigate('Map');
              navigation.closeDrawer();
            }}
          /> 
          <MenuButton
            title="PAYMENT"
            source={require('../../../assets/icons/menu_payment.png')}
            onPress={() => {
              navigation.navigate('Payment');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="ABOUTAPP"
            source={require('../../../assets/icons/menu_about.png')}
            onPress={() => {
              navigation.navigate('AboutApp');
              navigation.closeDrawer();
            }}
          />
          {/* <MenuButton
            title="CATEGORIES"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          /> */}
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
