import { ArrowBigDown, ArrowBigRight, ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Web Collaboration WhiteBoard",
        description: "Multiple users editing for day-planning",
        github: "https://github.com/wilatey/Web-Collaboration-WhiteBoard",
        image: "../../public/Whiteboard.png",
        tags: ["React", "TailwindCSS", "WebSocket"]
    },
    {
        id: 2,
        title: "Wallet transaction viewer",
        description: "A Web application of crypto wallet",
        github: "https://github.com/wilatey/Wallet-transaction-viewer",
        image: "../../public/TransactionViewer.png",
        tags: ["React, TailwindCSS", "Web"]
    },
    {
        id: 3,
        title: "Bicycle tracker application",
        description: "Tracking system in bicycle for mobile users",
        github: "https://github.com/wilatey/Mobile-Bicycle-tracker",
        image: "../../public/BicycleTracker.png",
        tags: ["Java, Andriod Studio"]
    }
];


export const Project = () => {
    return (
        <section id="projects" className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-font mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
                    Here are my projects base. Each of them are crafted on
                    specializing to user experience, detail, performance, and
                    so on with attention.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500" group-hover:scale-110
                                />
                            </div>
                        
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                            ))}
                            </div>  
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground test-sm mb-5">
                            {project.description}
                        </p>

                        <div className="flex justify-between items-center">
                            <div className="flex ml-5 space-x-3">
                                <a 
                                href={project.github} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                > 
                                    <GithubIcon size={25}/>
                                </a>
                            </div>
                        </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                    href="https://github.com/wilatey"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        View My GitHub <ArrowBigRight size={20}/>
                    </a>
                </div>
            </div>
        </section>
    )
}