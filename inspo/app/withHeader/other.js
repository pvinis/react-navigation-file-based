import { Stack } from "expo-router"
import { Button, Text, View } from "react-native"

export default function HeaderOther({ navigation }) {
	return (
		<>
			<Stack.Screen options={{ title: "other wow", headerRight: () => <Button title="Edit" /> }} />
			<View style={{ flex: 1, alignItems: "center", padding: 24 }}>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						maxWidth: 960,
						marginHorizontal: "auto",
					}}
				>
					<Text style={{ fontSize: 64, fontWeight: "bold" }}>Header Other World</Text>
					<Button title="Go back" onPress={() => navigation.goBack()} />
				</View>
			</View>
		</>
	)
}
