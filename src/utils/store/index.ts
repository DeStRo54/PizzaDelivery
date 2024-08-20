import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

import { AuthSliceState, createAuthSlice } from './createAuthSlice';
import { createPaymentSlice, PaymentSliceState } from './createPaymentSlice';

type StoreState = PaymentSliceState & AuthSliceState;

export const useAppStore = create<StoreState>()(
  devtools((...func) => ({
    ...createPaymentSlice(...func),
    ...createAuthSlice(...func)
  }))
);
