import { ThemeManager } from "./components/ThemeManager";
import { LanguageManager } from "./components/LanguageManager";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { LandingPageNew } from "./components/pages/LandingPageNew";
import { AboutPage } from "./components/pages/AboutPage";
import { WritingsPage } from "./components/pages/WritingsPage";
import { TestArticle } from "./components/Articles/2022_10_26_TestArticle";

export function App() {
	return (
		<>
			<LanguageManager>
				{ false &&
					<ThemeManager>
					<Header />
					<Body />
					</ThemeManager>
				}
				<LandingPageNew />
				<AboutPage />
				<WritingsPage />
			</LanguageManager>
		</>
	)
}
