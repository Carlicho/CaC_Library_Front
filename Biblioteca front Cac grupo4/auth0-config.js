
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0Config = {
  domain: 'dev-ftrqtu62cn1mp2ee.us.auth0.com',
  clientId: 'AWxApffW84M1VZJi0VTXsb1jzkBzCnkJ', 
  redirectUri: window.location.origin,
};

const Auth0ProviderWithHistory = ({ children }) => (
  <Auth0Provider
    domain={Auth0Config.domain}
    clientId={Auth0Config.clientId}
    redirectUri={Auth0Config.redirectUri}
  >
    {children}
  </Auth0Provider>
);

export default Auth0ProviderWithHistory;