import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface PersonPaymentStoreState {
  deliveryInfo: PersonPayment;
  debitCard: CreatePizzaPaymentDebitCardDto;
  addDeliveryInfo: (person: PersonPayment) => void;
  addPayment: (payment: CreatePizzaPaymentDebitCardDto) => void;
}

export const usePersonPaymentStore = create<PersonPaymentStoreState>()(
  devtools((set) => ({
    deliveryInfo: {} as PersonPayment,
    debitCard: {} as CreatePizzaPaymentDebitCardDto,
    addDeliveryInfo: (deliveryInfo: PersonPayment) => set({ deliveryInfo }),
    addPayment: (debitCard: CreatePizzaPaymentDebitCardDto) => set({ debitCard })
  }))
);
