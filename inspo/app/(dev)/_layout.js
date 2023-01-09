import { Stack } from "expo-router"

export default function DevLayout() {
	return (
		<Stack>
			<Stack.Screen name="devMenu" options={{ presentation: "modal" }} />
		</Stack>
	)
}
