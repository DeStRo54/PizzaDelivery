import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

interface PersonPaymentStoreState {
  receiverAddress: CreatePizzaPaymentAddressDto;
  person: CreatePizzaPaymentPersonDto;
  debitCard: CreatePizzaPaymentDebitCardDto;
  addPerson: (person: CreatePizzaPaymentPersonDto) => void;
  addAdress: (adress: CreatePizzaPaymentAddressDto) => void;
  addPayment: (payment: CreatePizzaPaymentDebitCardDto) => void;
}

export const usePersonPaymentStore = create<PersonPaymentStoreState>()(
  devtools((set) => ({
    receiverAddress: {} as CreatePizzaPaymentAddressDto,
    person: {} as CreatePizzaPaymentPersonDto,
    debitCard: {} as CreatePizzaPaymentDebitCardDto,
    addPerson: (person: CreatePizzaPaymentPersonDto) => set({ person }),
    addAdress: (receiverAddress: CreatePizzaPaymentAddressDto) => set({ receiverAddress }),
    addPayment: (debitCard: CreatePizzaPaymentDebitCardDto) => set({ debitCard })
  }))
);
