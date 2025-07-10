// App.jsx
import React from 'react'
import { ThemeProvider } from 'styled-components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { lightTheme, darkTheme } from './themes';

library.add(fas);

export default class App extends React.Component {
    state = {
        theme: 'light'
    };

    toggleTheme = () => {
        this.setState(prev => ({
            theme: prev.theme === 'light' ? 'dark' : 'light'
        }));
    };

    render () {
        const currentTheme = this.state.theme === 'light' ? lightTheme : darkTheme;

        return (
            <ThemeProvider theme={currentTheme}>
                <Sidebar toggleTheme={this.toggleTheme} />
            </ThemeProvider>
        );
    }
}
