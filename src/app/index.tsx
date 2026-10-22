import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Item = {
  id: string;
  name: string;
};

export default function Index() {
  const [text, setText] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  function addItem(): void {
    const name = text.trim();
    if (name.length === 0) return;

    const newItem: Item = {
      id: Date.now().toString(),
      name,
    };

    setItems((prev) => [...prev, newItem]);
    setText("");
  }
  function removeItem(id: string): void {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
  const countLabel = items.length === 1 ? "1 ítem" : `${items.length} ítems`;
  function clearItems(): void {
    setItems([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Ej: Leche"
          placeholderTextColor="#64748b"
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <Pressable
          style={styles.addButton}
          onPress={addItem}
          accessibilityRole="button"
          accessibilityLabel="Agregar ítem"
        >
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.count}>{countLabel}</Text>
        <Pressable
          onPress={clearItems}
          disabled={items.length === 0}
          accessibilityRole="button"
          accessibilityLabel="Vaciar lista"
        >
          <Text
            style={[
              styles.clearText,
              items.length === 0 && styles.clearTextDisabled,
            ]}
          >
            Limpiar
          </Text>
        </Pressable>
      </View>
  
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.itemText} numberOfLines={1}>
              {item.name}
            </Text>

            <Pressable
              onPress={() => removeItem(item.id)}
              hitSlop={8}
              style={styles.deleteButton}
              accessibilityRole="button"
              accessibilityLabel={`Eliminar ${item.name}`}
            >
              <Text style={styles.deleteText}>✕</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay ítems todavía</Text>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
    gap: 16,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#1e293b",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#f8fafc",
    fontSize: 16,
  },
  addButton: {
    minWidth: 48, 
    paddingHorizontal: 12,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  count: {
    color: "#94a3b8",
    fontSize: 14,
    fontWeight: "600",
  },
  clearText: {
    color: "#f87171",
    fontSize: 14,
    fontWeight: "600",
  },
  clearTextDisabled: {
    opacity: 0.4,
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: 8,
    paddingBottom: 24,
  },
  row: {
    backgroundColor: "#1e293b",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    flex: 1,
    color: "#f8fafc",
    fontSize: 16,
  },
  deleteButton: {
    minWidth: 32,
    minHeight: 32,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#f87171",
    fontSize: 18,
    fontWeight: "700",
  },
  empty: {
    color: "#64748b",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 24,
  },
});