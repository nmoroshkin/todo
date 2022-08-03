import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';
import store, { persistor } from './redux/store';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff9ff3',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
