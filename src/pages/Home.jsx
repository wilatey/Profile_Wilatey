import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomePage } from "../components/HomePage";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Project } from "../components/Project";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            <main>
                <HomePage />
                <About />
                <Skills />
                <Project />
            </main>

            {/* Footer */}
        </div>
    );
};