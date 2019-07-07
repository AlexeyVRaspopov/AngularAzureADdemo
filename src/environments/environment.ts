export const ADALConfig = {
  tenant: 'tenant id',
  clientId: 'client id',
  redirectUri: window.location.origin,
  endpoints: { "http://localhost:8080/Api/": "client id",
  },
  navigateToLoginRequestUrl: false,
  cacheLocation: '<localStorage / sessionStorage>'
};