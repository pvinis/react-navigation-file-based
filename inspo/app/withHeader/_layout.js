import { Stack } from "expo-router"

export default function HeaderLayout() {
	return (
		<Stack
			initialRouteName="home"
			screenOptions={{
				headerStyle: { backgroundColor: "pink" },
				headerTintColor: "white",
				headerTitleStyle: { fontWeight: "bold" },
			}}
		/>
	)
}
