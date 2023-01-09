import { View } from "react-native"
import { Children } from "expo-router"

export default function Layout({ children }) {
	return (
		<View style={{ flex: 1, backgroundColor: "pink" }}>
			<Children />
		</View>
	)
}
