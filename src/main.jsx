import { ViteReactSSG } from 'vite-react-ssg/single-page';

import App from './App.jsx'

const isDev = import.meta.env.DEV

if (isDev) {
  import('react-dom/client').then(({ createRoot }) => {
    createRoot(document.getElementById('root')).render(<App />)
  })
}

export const createRoot = ViteReactSSG(<App />)
