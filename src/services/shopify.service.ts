import axios from "axios";
import { config } from "../config/env";

export async function getShopifyOrders(limit: number = 100) {
  const res = await axios.get(
    `https://${config.shopify.store}/admin/api/2024-01/orders.json`,
    {
      headers: {
        "X-Shopify-Access-Token": config.shopify.accessToken,
        "Content-Type": "application/json",
      },
      params: {
        status: "any",
        limit,
      },
    }
  );

  return res.data.orders;
}
