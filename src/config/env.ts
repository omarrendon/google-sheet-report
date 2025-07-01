import dotenv from "dotenv";
dotenv.config();

export const config = {
  shopify: {
    store: process.env.SHOPIFY_DOMAIN!,
    accessToken: process.env.SHOPIFY_ACCESS_TOKEN!,
  },
  sheets: {
    sheetId: process.env.GOOGLE_SHEET_ID!,
  },
  googleSheetUrl: process.env.GOOGLE_SHEET!,
};
