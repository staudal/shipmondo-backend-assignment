export type Balance = {
  amount: number;
  currency_code: string;
  updated_at: string;
};

export type Shipment = {
  shipment_id: number;
  package_numbers: string[];
};

export const shipmentBody = {
  test_mode: false,
  own_agreement: false,
  label_format: "a4_pdf",
  product_code: "GLSDK_SD",
  service_codes: "EMAIL_NT,SMS_NT",
  reference: "Order 10001",
  automatic_select_service_point: true,
  sender: {
    name: "Min Virksomhed ApS",
    attention: "Lene Hansen",
    address1: "Hvilehøjvej 25",
    address2: null,
    zipcode: "5220",
    city: "Odense SØ",
    country_code: "DK",
    email: "info@minvirksomhed.dk",
    mobile: "70400407",
  },
  receiver: {
    name: "Lene Hansen",
    attention: null,
    address1: "Skibhusvej 52",
    address2: null,
    zipcode: "5000",
    city: "Odense C",
    country_code: "DK",
    email: "lene@email.dk",
    mobile: "12345678",
  },
  parcels: [
    {
      weight: 1000,
    },
  ],
};
