import { Button, Text, View } from "react-native"

export default function Names({ navigation, route }) {
	console.log({ route })
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
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>
					Names {route.params.names.join(", ")}
				</Text>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
