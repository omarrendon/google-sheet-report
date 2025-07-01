import { config } from "./config/env";
import { generateShopifyReport } from "./core/report.generator";

generateShopifyReport()
  .then(() =>
    console.log(`Reporte generado exitosamente ✅ : ${config.googleSheetUrl}`)
  )
  .catch(err => console.error("El Reporte presento un error ❌ : ", err));
