import cron from "node-cron";
import { config } from "./config/env";
import { generateShopifyReport } from "./core/report.generator";

console.log("⏰ Iniciando generador de reporte con cron job...");

// El reporte se genera en automatico todos los días a las 8:00 AM
cron.schedule("0 8 * * *", async () => {
  try {
    await generateShopifyReport();
    console.log(`Reporte generado exitosamente ✅ : ${config.googleSheetUrl}`);
  } catch (err) {
    console.error("El Reporte presento un error ❌ : ", err);
  }
});
