import { LanguageManager } from "./components/LanguageManager";
import { LandingPageNew } from "./components/pages/LandingPageNew";
import { AboutPage } from "./components/pages/AboutPage";
import { WritingsPage } from "./components/pages/WritingsPage";
import { LanguageToggle } from "./components/LanguageToggle";
import { ResumePage } from "./components/pages/ResumePage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { PageTransition } from "./components/PageTransition";

export function App() {
	return (
		<PageTransition>
			<LanguageManager>
				{ false && 
					<LanguageToggle />
				}
				<LandingPageNew />
				<ProjectsPage />
				<AboutPage />
				<ResumePage />
				<WritingsPage />
				<ContactPage />
			</LanguageManager>
		</PageTransition>
	)
}
