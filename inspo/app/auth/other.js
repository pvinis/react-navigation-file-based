import { useAtom } from "jotai"
import { Button, Text, View } from "react-native"
import { loggedInAtom } from "./atoms"

export default function AuthOther({ navigation }) {
	const [, setLoggedIn] = useAtom(loggedInAtom)

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
				<Button title="Log out" onPress={() => setLoggedIn(false)} />
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Auth Other World</Text>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
