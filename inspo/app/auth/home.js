import { useAtom } from "jotai"
import { Link } from "expo-router"
import { Button, Text, View } from "react-native"
import { loggedInAtom } from "./atoms"

export default function AuthHome({ navigation }) {
	const [loggedIn, setLoggedIn] = useAtom(loggedInAtom)

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
				<Button
					title={(loggedIn ? "Logged In" : "Logged Out") + ", tap to toggle."}
					onPress={() => setLoggedIn((v) => !v)}
				/>
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Auth Home World</Text>
				<Link href="/auth/other">Go to other world</Link>
				<Button title="Go back" onPress={() => navigation.goBack()} />
			</View>
		</View>
	)
}
