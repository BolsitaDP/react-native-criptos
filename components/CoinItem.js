import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>${coin.current_price}</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}>
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#ffffff",
    textAlign: "right",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#555555",
    textTransform: "uppercase",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B5B9",
  },
  priceDown: {
    color: "#fc4422",
  },
});

export default CoinItem;
