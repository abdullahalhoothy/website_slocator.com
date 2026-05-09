import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ملف Tailwind الأساسي
import './i18n'; // استدعاء الترجمة مهم جداً قبل تحميل التطبيق

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);