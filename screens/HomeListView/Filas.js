import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//Each attribute of the row has a style.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

//Each row is a "view" with: Image + identifierProduct(unique) + nameProduct + priceProduct.
const UriPicture='http://tmnopal.com.mx/tmnopal-archivos/2015/11/comercializacion-de-producto.png';

//When this component is called, obtains the parameters by "props".
const Filas = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: UriPicture}} style={styles.photo} />
    <Text style={styles.text}>
      {`(${props.identificador}) ${props.name}, ${props.price} `}
    </Text>
  </View>
);

export default Filas;
