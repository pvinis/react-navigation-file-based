import { Text, View } from "react-native"
import { Link } from "expo-router"

export default function Page() {
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
				<Text style={{ fontSize: 64, fontWeight: "bold" }}>Hello World</Text>
				<Text style={{ fontSize: 36, color: "#38434D" }}>This is the first page of your app.</Text>
				<Link href={{ pathname: "/second" }}>Go to second world</Link>
				<Link href="/third">Go to third world</Link>
				<Link href={{ pathname: "/third/fourth" }}>Go to fourth world</Link>
				<Link href="/fifth">Go to fifth world</Link>
				<Link href="/fifth/sixth">Go to sixth world</Link>
				<Link href="/posts/wow123">Go to post wow123</Link>
				<Link href="/posts/YEA">Go to post YEA</Link>
				<Link href="/posts2/wow123/text">Go to post2 text wow123</Link>
				<Link href="/posts2/YEA/text">Go to post2 text YEA</Link>
				<Link href="/names/one/two/three">Go to post names</Link>
				<Link href="/withHeader/home">Go to header worlds</Link>
				<Link href="/withTabs/home">Go to tabs worlds</Link>
				<Link href="/auth/home">Go to auth worlds</Link>
				<Link href="/devMenu">Open global modal</Link>
				<Link href="/_sitemap">Go to sitemap</Link>
			</View>
		</View>
	)
}
