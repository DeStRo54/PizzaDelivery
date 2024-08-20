import './styles';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { getUserSession } from './utils/api/requests/users/session';
import { LOCALE_STORAGE_KEYS } from './utils/constants/localeStorageKeys.ts';
import { useAppStore } from './utils/store/index.ts';

const init = async () => {
  const queryClient = new QueryClient();

  const token = localStorage.getItem(LOCALE_STORAGE_KEYS.TOKEN);

  if (token) {
    const getUserSessionRespone = await getUserSession();
    useAppStore.setState({
      isLoggedIn: true, user: getUserSessionRespone.data.user, deliveryInfo:
        { ...(getUserSessionRespone.data.user as Person), adress: getUserSessionRespone.data.user.city as string }
    });

  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

init();
