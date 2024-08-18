type PizzaName =
  | 'PINEAPPLE'
  | 'MOZZARELLA'
  | 'PEPERONI'
  | 'GREEN_PEPPER'
  | 'MUSHROOMS'
  | 'BASIL'
  | 'CHEDDAR'
  | 'PARMESAN'
  | 'FETA'
  | 'HAM'
  | 'PICKLE'
  | 'TOMATO'
  | 'BACON'
  | 'ONION'
  | 'CHILE'
  | 'SHRIMPS'
  | 'CHICKEN_FILLET'
  | 'MEATBALLS';

type BaseResponse = {
  success: boolean;
  reason?: string;
};

interface PizzaIngredient {
  name: PizzaName;
  cost: number;
  img: string;
}

interface PizzaSize {
  name: 'SMALL' | 'MEDIUM' | 'LARGE';
  price: number;
}

interface PizzaDough {
  name: 'THIN' | 'THICK';
  price: number;
}

interface Pizza {
  id: string;
  name: string;
  ingredients: PizzaIngredient[];
  toppings: PizzaIngredient[];
  description: string;
  sizes: PizzaSize[];
  doughs: PizzaDough[];
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}

type PizzasResponse = BaseResponse & {
  catalog: Pizza[];
};

interface CreatePizzaPaymentPizzaDto {
  id: string;
  name: string;
  toppings: PizzaIngredient[];
  description: string;
  size: PizzaSize;
  doughs: PizzaDough;
}

interface CreatePizzaPaymentAddressDto {
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

interface CreatePizzaPaymentPersonDto {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
}

interface CreatePizzaPaymentDebitCardDto {
  pan: string;
  expireDate: string;
  cvv: string;
}

interface CreatePizzaPaymentDto {
  receiverAddress: CreatePizzaPaymentAddressDto;
  person: CreatePizzaPaymentPersonDto;
  debitCard: CreatePizzaPaymentDebitCardDto;
  pizzas: CreatePizzaPaymentPizzaDto[];
}

type PizzaPaymentResponse = BaseResponse & {
  order: CreatePizzaPaymentDto;
};

interface User {
  firstname?: string;
  lastname?: string;
  middlename?: string;
  phone: string;
  email?: string;
  city?: string;
}

interface CreateOtpDto {
  phone: string;
}

type OtpResponse = BaseResponse & {
  retryDelay: number;
};

interface SignInDto extends CreateOtpDto {
  code: number;
}

type SignInResponse = BaseResponse & {
  user: User;
  token: string;
};

type SessionResponse = BaseResponse & {
  user: User;
};

interface UpdateProfileProfileDto {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  city: string;
}

interface UpdateProfileDto {
  profile: UpdateProfileProfileDto;
  phone: string;
}

type UpdateProfileResponse = BaseResponse & {
  user: User;
};

interface PizzaPerson {
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
}

interface PizzaAdress {
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

interface PizzaOrder {
  _id: string;
  person: PizzaPerson;
  receiverAddress: PizzaAdress;
  status: 0 | 1 | 2 | 3 | 4;
  cancellable: boolean;
}

type PizzaOrdersResponse = BaseResponse & {
  orders: PizzaOrder[];
};

type PizzaOrderResponse = BaseResponse & {
  order: PizzaOrder;
};

interface CancelPizzaOrderDto {
  orderId: string;
}

type CancelPizzaOrderResponse = BaseResponse;
