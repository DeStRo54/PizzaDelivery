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

const addPerson = (state: PersonPaymentStoreState, currentPerson: CreatePizzaPaymentPersonDto) => ({
  ...state,
  person: currentPerson
});

const addAdress = (state: PersonPaymentStoreState, currentAdress: CreatePizzaPaymentAddressDto) => ({
  ...state,
  receiverAddress: currentAdress
});

const addPayment = (state: PersonPaymentStoreState, currentPayment: CreatePizzaPaymentDebitCardDto) => ({
  ...state,
  debitCard: currentPayment
});

export const usePersonPaymentStore = create<PersonPaymentStoreState>()(
  devtools((set) => ({
    receiverAddress: {} as CreatePizzaPaymentAddressDto,
    person: {} as CreatePizzaPaymentPersonDto,
    debitCard: {} as CreatePizzaPaymentDebitCardDto,
    addPerson: (person: CreatePizzaPaymentPersonDto) =>
      set((state: PersonPaymentStoreState) => addPerson(state, person)),
    addAdress: (adress: CreatePizzaPaymentAddressDto) =>
      set((state: PersonPaymentStoreState) => addAdress(state, adress)),
    addPayment: (payment: CreatePizzaPaymentDebitCardDto) =>
      set((state: PersonPaymentStoreState) => addPayment(state, payment))
  }))
);
