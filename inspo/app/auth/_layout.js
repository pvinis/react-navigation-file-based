import { useAtom } from "jotai"
import { Layout } from "expo-router"
import { loggedInAtom } from "./atoms"

export default function AuthLayout({ navigation }) {
	const [loggedIn] = useAtom(loggedInAtom)

	return (
		<Layout>
			<Layout.Screen name="other" redirect={!loggedIn} />
			<Layout.Children />
		</Layout>
	)
}
