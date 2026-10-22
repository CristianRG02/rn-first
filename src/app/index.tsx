import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.tarjeta}>
        <View style={styles.avatar}>
          <Text style={styles.iniciales}>JD</Text>
        </View>

        <Text style={styles.nombre}>Juan Delgado</Text>
        <Text style={styles.rol}>Transportista</Text>

        <View style={styles.divisor} />

        <View style={styles.cen}>
          <View style={styles.fila}>
          <Text>📞</Text>
          <Text style={styles.texto}>+52 555 123 4567</Text>
        </View>

        <View style={styles.fila}>
          <Text>✉️</Text>
          <Text style={styles.texto}>juan@fletes.com</Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
    justifyContent: "center", alignItems: "center"
  },
  tarjeta: {
    width: "100%",
    backgroundColor: "#1e293b",
    maxWidth: 340,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    alignItems: "center",
    gap: 12,
    borderColor: "#334155",
  },
  cen:{
    alignItems: "center"
  },
  divisor: {
    height: 1,
    alignSelf: "stretch", backgroundColor: "#334155",
  },
  avatar: {
    width: 72, height: 72, borderRadius: 36, justifyContent: "center", alignItems: "center", backgroundColor: "#3b82f6",
  },
  iniciales: {
    color: "#f8fafc", fontSize: 24, fontWeight: "700",
  },
  nombre: {
    color: "#f8fafc", fontSize: 24, fontWeight: "700",
  },
  rol: {
    fontSize: 14, color: "#94a3b8",
  },
  fila: {
    flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "stretch",
  },
  texto: {
    fontSize: 15, color: "#f8fafc",
  }


});
