import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { PizzaCart } from '../CartPage/PizzaCart/PizzaCart.tsx';
import { PizzaCatalog } from '../CatalogPage/PizzaCatalog/PizzaCatalog.tsx';
import { Layout } from '../Layout/Layout.tsx';
import { Payment } from '../PaymentPage/Payment/Payment.tsx';
import { PersonData } from '../PersonPage/PersonData.tsx';
import { Profile } from '../Profile/Profile.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<PizzaCatalog />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<div>Заказы</div>} />
      <Route path="/cart" element={<PizzaCart />} />
      <Route path="/cart/person" element={<PersonData />} />
      <Route path="/cart/payment" element={<Payment />} />
      <Route path="/auth" element={<div>Выйти</div>} />
    </Route>
  )
);

export const Router = () => <RouterProvider router={router}></RouterProvider>;
