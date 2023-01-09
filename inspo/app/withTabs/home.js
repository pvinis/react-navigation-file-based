import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default function TabsHome({ navigation }) {
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
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Tabs Home World</Text>
				<Link href="./other">Go to other world</Link>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
