import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout, Orders, Payment, PersonData, PizzaAuth, PizzaCart, PizzaCatalog, Profile } from './constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <PizzaCatalog />
          </Suspense>
        }
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <Profile />
          </Suspense>
        }
      />
      <Route
        path="/orders"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <Orders />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <PizzaCart />
          </Suspense>
        }
      />
      <Route
        path="/cart/person"
        element={
          <Suspense>
            <PersonData />
          </Suspense>
        }
      />
      <Route
        path="/cart/payment"
        element={
          <Suspense>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense>
            <PizzaAuth />
          </Suspense>
        }
      />
    </Route>
  )
);

export const Router = () => <RouterProvider router={router}></RouterProvider>;
