import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import logo from "@/assets/logo.png";
import setting from "@/assets/setting.png";
import mastercard from "@/assets/mastercard.png";
import wallet from "@/assets/Wallet.png";
import pix from "@/assets/pix.png";
import boleto from "@/assets/boleto.png";
import dinheiro from "@/assets/dinheiro.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logo} />
          <Image source={setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={mastercard} />
          </View>
          <Text style={styles.cardTxt}>Pedro Henrique</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderTxt}>Saldo disponível</Text>
            <Image source={wallet} />
          </View>
          <Text style={styles.cardDetailsTxt}>R$ 200,00</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>Do que você precisa?</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.footerContentScrollView}
        >
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardTxt}>fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardTxt}>Pague um Boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardTxt}>fazer um Deposito</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardTxt}>fazer um Pix</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
  },
  content: {
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 40,
  },
  card: {
    width: "100%",
    height: 190,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: "space-between",
  },
  cardDetails: {
    width: "100%",
    height: 120,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTxt: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardDetailsHeaderTxt: {
    color: "#FFF",
  },
  cardDetailsTxt: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
  },
  footer: {
    paddingTop: 30,
    paddingLeft: 20,
  },
  footerTxt: {
    color: "#fff",
    marginHorizontal: 20,
    paddingBottom: 30,
    fontWeight: "600",
    fontSize: 14,
  },
  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#9500F6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  footerCardTxt: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18,
  },
  footerContentScrollView: {
    height: 400,
  },
});
