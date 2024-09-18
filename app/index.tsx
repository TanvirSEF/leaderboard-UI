import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((items, index) => {
            return (
              <View
                key={index}
                style={[styles.mainCard, items !== 1 && { marginTop: 40 }]}
              >
                <Image
                  source={require("@/assets/images/app.png")}
                  style={styles.mainCardImage}
                  resizeMode="cover"
                />
                <Text style={styles.mainCardTitle}>Tanvir</Text>
                <View style={styles.mainCardRank}>
                  <Text style={styles.mainCardRankText}>{items}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Image
                  source={require("@/assets/images/appp.png")}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <Text style={styles.cardText}>Tanvir Hasan</Text>
              </View>
              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRank}>234234</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  topContainer: {
    paddingTop: 60,
    padding: 20,
    paddingBottom: 60,
    backgroundColor: "#1A1F25",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardRankContainer: {},
  cardRank: {
    color: "orange",
  },
  cardIndex: {
    color: "white",
  },
  cardImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: 10,
  },
  cardText: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,
    height: 180,
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  mainCardRank: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "orange",
    position: "absolute",
    bottom: -20,
  },
  mainCardRankText: {
    color: "white",
  },
});

export default Home;
