import '../../styles/global.css';
import type { AppProps } from 'next/app';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from 'config/authProvider';

const App: React.FC<AppProps> = (props) => {
    
    const { Component, pageProps } = props;

    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
};

export default App;