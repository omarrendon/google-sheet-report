import { getShopifyOrders } from "../services/shopify.service";
import {
  createSheetWithName,
  insertReportToSheet,
} from "../services/sheets.service";
import { formatOrdersData, formatSheetName } from "../utils/format.utils";

export async function generateShopifyReport() {
  const orders = await getShopifyOrders(100);
  const sheetName = formatSheetName();
  const rows = [
    [
      "ID de Pedido",
      "Nombre del Cliente",
      "Fecha de Compra",
      "Productos Comprados",
      "Monto Total",
    ],
    ...formatOrdersData(orders),
  ];
  const { sheetId, sheetsApi } = await createSheetWithName(sheetName);
  await insertReportToSheet(sheetsApi, sheetId, sheetName, rows);
}
