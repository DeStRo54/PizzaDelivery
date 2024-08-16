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

type PizzasResponse = {
  success: boolean;
  reason?: string;
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

type PizzaPaymentResponse = {
  success: boolean;
  reason?: string;
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

type OtpResponse = {
  success: boolean;
  reason?: string;
  retryDelay: number;
};

interface SignInDto extends CreateOtpDto {
  code: number;
}

type SignInResponse = {
  success: boolean;
  reason?: string;
  user: User;
  token: string;
};

type SessionResponse = {
  success: boolean;
  reason?: string;
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

type UpdateProfileResponse = {
  success: boolean;
  reason?: string;
  user: User;
};
