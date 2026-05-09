<<<<<<< HEAD
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
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // <-- هذا السطر مهم جداً لتشغيل التصميم!
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> upstream/main
