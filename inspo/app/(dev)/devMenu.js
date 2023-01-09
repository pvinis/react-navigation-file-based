import { Button, Text, View } from "react-native"

export default function GlobalDevMenu({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", padding: 24 }}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					maxWidth: 960,
					marginHorizontal: "auto",
				}}
			>
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Global Dev Menu</Text>
				<Button title="Dismiss" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
