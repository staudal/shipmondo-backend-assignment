import axios, { AxiosInstance } from "axios";
import { Balance, Shipment, shipmentBody } from "../constants";

const createApiClient = (): AxiosInstance => {
  const encodedCredentials = Buffer.from(
    `${process.env.SHIPMONDO_API_USER}:${process.env.SHIPMONDO_API_KEY}`
  ).toString("base64");

  return axios.create({
    baseURL: process.env.SHIPMONDO_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Basic ${encodedCredentials}`,
    },
  });
};

const apiClient = createApiClient();

export async function createNewShipmondoShipment(): Promise<Shipment> {
  const response = await apiClient.post("/shipments", shipmentBody);
  return {
    shipment_id: response.data.id,
    package_numbers: response.data.parcels.map((parcel: any) => parcel.pkg_no),
  };
}

export async function getShipmondoAccountBalance(): Promise<number> {
  const response = await apiClient.get<Balance>("/account/balance");
  return response.data.amount;
}
