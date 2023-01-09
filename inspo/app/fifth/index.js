import { Button, Text, View } from "react-native"
import { Link } from "expo-router"

export default function Second({ navigation }) {
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
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Fifth World</Text>
				<Button title="Go back" onPress={() => navigation.goBack()} />
				<Link href={{ pathname: "/" }}>Go home</Link>
			</View>
		</View>
	)
}
