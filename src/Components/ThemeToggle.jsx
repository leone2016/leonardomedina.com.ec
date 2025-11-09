import { useEffect, useMemo, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'theme-preference';

const getPreferredScheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
        return stored;
    }
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    return media?.matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    root.style.colorScheme = theme;
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        const initial = getPreferredScheme();
        if (typeof document !== 'undefined') {
            applyTheme(initial);
        }
        return initial;
    });

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (event) => {
            setTheme(event.matches ? 'dark' : 'light');
        };

        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, []);

    const isDark = useMemo(() => theme === 'dark', [theme]);

    const handleToggle = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="group relative inline-flex h-10 w-20 items-center rounded-full border border-slate-300/70 bg-white/70 px-1 transition-all duration-300 hover:border-blue-400/70 hover:shadow-lg dark:border-slate-700/70 dark:bg-slate-900/80 dark:hover:border-purple-400/70"
        >
            <span
                className={`absolute inset-y-1 flex w-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 ${
                    isDark ? 'translate-x-full' : 'translate-x-0'
                }`}
            >
                {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </span>
            <span className="flex h-full w-full items-center justify-between px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                <span className={`transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-100'}`}>
                    Light
                </span>
                <span className={`text-right transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'}`}>
                    Dark
                </span>
            </span>
        </button>
    );
}

