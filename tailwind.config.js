// Tailwind config for CSS variable-based colors
export default {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: 'hsl(var(--card))',
                primary: 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',
                border: 'hsl(var(--border))',
            },
        },
    },
    plugins: [],
}
