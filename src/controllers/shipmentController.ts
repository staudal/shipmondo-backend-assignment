import { Request, Response } from "express";
import prisma from "../config/prisma";
import {
  createNewShipmondoShipment,
  getShipmondoAccountBalance,
} from "../services/shipmondoService";

export async function createNewShipment(req: Request, res: Response) {
  const shipment = await createNewShipmondoShipment();
  const newShipment = await prisma.shipment.create({
    data: {
      shipmentId: shipment.shipment_id,
      packages: {
        create: shipment.package_numbers
          .filter((pkgNo: string) => !isNaN(parseInt(pkgNo, 10)))
          .map((pkgNo: string) => ({
            packageNumber: parseInt(pkgNo, 10),
          })),
      },
    },
  });
  const balanceAmount = await getShipmondoAccountBalance();
  await prisma.balance.upsert({
    where: { id: 1 },
    update: { amount: balanceAmount },
    create: { amount: balanceAmount },
  });
  return res.status(201).json({ newShipment, updatedBalance: balanceAmount });
}
