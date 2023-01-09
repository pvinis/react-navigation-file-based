import { Stack, Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default function HeaderHome({ navigation }) {
	return (
		<>
			<Stack.Screen options={{ title: "wow" }} />
			<View style={{ flex: 1, alignItems: "center", padding: 24 }}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						maxWidth: 960,
						marginHorizontal: "auto",
					}}
				>
					<Text style={{ fontSize: 64, fontWeight: "bold" }}>Header Home World</Text>
					<Link href="/withHeader/other">Go to other world</Link>
					<Button title="Go back" onPress={() => navigation.goBack()} />
				</View>
			</View>
		</>
	)
}
