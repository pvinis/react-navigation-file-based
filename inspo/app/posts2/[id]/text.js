import { Button, Text, View } from "react-native"

export default function Post2WithId({ navigation, route }) {
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
					Post2 text with id {route.params.id}
				</Text>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
