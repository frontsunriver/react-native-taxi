// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';
// import MenuImage from '../../components/MenuImage/MenuImage';

// export default class YandexMapScene extends React.Component{
//   static navigationOptions = ({ navigation }) => ({
//     title: 'Home',
//     headerLeft: () => <MenuImage
//       onPress={() => {
//         navigation.openDrawer();
//       }}
//     />
//   });
//   render(){
//     const mapState = { center: [55.76, 37.64], zoom: 10 };
//     return (
//       <YMaps>
//       <Map state={mapState} style={styles.map}>
  
//         <Placemark
//           geometry={{
//             coordinates: [55.751574, 37.573856]
//           }}
//           properties={{
//             hintContent: 'Собственный значок метки',
//             balloonContent: 'Это красивая метка'
//           }}
//           options={{
//             iconLayout: 'default#image',
//             iconImageHref: 'images/myIcon.gif',
//             iconImageSize: [30, 42],
//             iconImageOffset: [-3, -42]
//           }}
//         />
  
//       </Map>
//     </YMaps>
//     )
//   }
// }
//=====================================================YandexMap

//=====================================================GoogleMap
import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import MapView from "react-native-maps";
import MenuImage from '../../components/MenuImage/MenuImage';

export default class YandexMap extends React.Component{
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: 'true',
    title: '',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />,
    headerRight: () => <TouchableNativeFeedback onPress={() => alert("1")}><Text>test</Text></TouchableNativeFeedback>
  });

  constructor(){
    super();
  }

  render(){
    return(
        <MapView
          provider={MapView.PROVIDER_DEFAULT}
          initialRegion={{
            latitude: 41.3775,
            longitude: 64.5853,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          >
        </MapView>
    )
  }
}

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
}