import { Menu } from "lucide-react";
import { cn } from "../lib/utili";
import { useEffect, useState } from "react";


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

function List1({ name, theme }) {
    if (theme === "dark")
        return <span className="relative top-1 text-xl text-neutral-200 z-10 font-bold"> {name} </span>
    else
        return <span className="relative top-1 text-xl text-zinc-900 z-10 font-bold"> {name} </span>
}

function List2({ name, theme }) {
    return (
        <span
            className={
                cn(
                    "relative top-1 text-xl z-10 font-bold transition-colors duration-300",
                    theme === "dark"
                        ? "text-neutral-100 hover:text-violet-500"
                        : "text-gray-900 hover:text-violet-500"
                )
            }
        >
            {name}
        </span>
    );
}

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative text-glow text-foreground z-10 font-bold">Wilson</span>
                    <span className="mx-1" />
                    <List1
                        theme={theme}
                        name="Portfolio"
                    />
                </a>
                {/* desktop nav*/}
                <div className="hidden md:flex space-x-12 ">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="opacity-80 transition duration-300"
                        >
                            <List2
                                theme={theme}
                                name={item.name}
                            />
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className="md:hidden p-2 rounded-full bg-violet-600 text-white z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={cn(
                    "fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col items-center justify-center space-y-12 text-xl">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="opacity-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <List2 theme={theme} name={item.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav >
    );
};