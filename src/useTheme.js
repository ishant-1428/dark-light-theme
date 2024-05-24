
// 1. Create a custom Hook for Themes.
// 2. Define your theme colors.
// 3. Adding them to our Code.
import {useState} from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return [theme, toggleTheme];
}

export default useTheme;