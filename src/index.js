import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/reset.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { FluentProvider , webDarkTheme} from '@fluentui/react-components';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './common/appRouter';

const customDarkTheme = {
...webDarkTheme,
fontFamilyBase: '"Roboto", sans-serif'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FluentProvider theme={customDarkTheme}>
    <RouterProvider router={AppRouter}/>
  </FluentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
