import { AuthProvider } from 'context/auth/store';
import App from './App';
import { SettingsProvider } from 'context/settings/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const Setup: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SettingsProvider>
                    <App />
                </SettingsProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default Setup;
