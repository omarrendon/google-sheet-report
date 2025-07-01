import cron from "node-cron";
import { config } from "./config/env";
import { generateShopifyReport } from "./core/report.generator";

console.log("⏰ Iniciando generador de reporte con cron job...");

// El reporte se genera en automatico cada 5 segundos
// Puedes cambiar el cron a tu necesidad, por ejemplo: "0 0 * * * " para ejecutarlo diariamente a la medianoche
cron.schedule("*/5 * * * * *", async () => {
  try {
    await generateShopifyReport();
    console.log(`Reporte generado exitosamente ✅ : ${config.googleSheetUrl}`);
  } catch (err) {
    console.error("El Reporte presento un error ❌ : ", err);
  }
});
