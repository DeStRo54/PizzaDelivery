import { lazy } from 'react';

export const Layout = lazy(() => import('../../Layout/Layout').then((module) => ({ default: module.Layout })));
export const PizzaCatalog = lazy(() =>
  import('../../CatalogPage/PizzaCatalog/PizzaCatalog').then((module) => ({ default: module.PizzaCatalog }))
);
export const Profile = lazy(() => import('../../Profile/Profile').then((module) => ({ default: module.Profile })));

export const Orders = lazy(() => import('../../OrdersPage/OrdersCatalog/Orders.tsx').then((module) => ({ default: module.Orders })));

export const PizzaCart = lazy(() =>
  import('../../CartPage/PizzaCart/PizzaCart').then((module) => ({ default: module.PizzaCart }))
);
export const PersonData = lazy(() =>
  import('../../PersonPage/PersonData').then((module) => ({ default: module.PersonData }))
);
export const Payment = lazy(() =>
  import('../../PaymentPage/Payment/Payment').then((module) => ({ default: module.Payment }))
);
export const PizzaAuth = lazy(() =>
  import('../../AuthPage/PizzaAuth/PizzaAuth.tsx').then((module) => ({ default: module.PizzaAuth }))
);
