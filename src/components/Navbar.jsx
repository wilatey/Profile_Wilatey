import { cn } from "../lib/utili";
import { useEffect, useState } from "react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

function List({ name, theme }) {
    if (theme === "dark")
        return <span className="relative top-2 left-1 text-3xl text-zinc-400 z-10 font-bold"> {name} </span>
    else
        return <span className="relative top-2 left-1 text-3xl text-zinc-900 z-10 font-bold"> {name} </span>
}

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || (document.documentElement.classList.contains("dark") ? "dark" : "light");
        }
        return "light";
    });

    useEffect(() => {
        const handleScoll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScoll);
        return () => window.removeEventListener("scroll", handleScoll);
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-ws" : "py-5"
        )}
        >
            <div className="container flex items-center justify-center">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative text-glow text-foreground z-10 font-bold">Wilson</span>
                    <span className="mx-1" />
                    <List
                        theme={theme}
                        name="Portfolio"
                    />
                </a>
            </div>
        </nav >
    );
};