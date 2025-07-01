import { google } from "googleapis";
import path from "path";
import { config } from "../config/env";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "../../credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function createSheetWithName(name: string) {
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.batchUpdate({
    spreadsheetId: config.sheets.sheetId,
    requestBody: {
      requests: [{ addSheet: { properties: { title: name } } }],
    },
  });

  return {
    sheetId: response.data.replies?.[0].addSheet?.properties?.sheetId!,
    sheetsApi: sheets,
  };
}

export async function insertReportToSheet(
  sheetsApi: any,
  sheetId: number,
  sheetName: string,
  rows: any[][]
) {
  await sheetsApi.spreadsheets.values.update({
    spreadsheetId: config.sheets.sheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values: rows },
  });

  const totalCols = rows[0].length;

  await sheetsApi.spreadsheets.batchUpdate({
    spreadsheetId: config.sheets.sheetId,
    requestBody: {
      requests: [
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.81, green: 0.89, blue: 0.95 },
                textFormat: {
                  bold: true,
                  fontSize: 12,
                  foregroundColor: { red: 0.1, green: 0.1, blue: 0.1 },
                },
                horizontalAlignment: "CENTER",
                verticalAlignment: "MIDDLE",
              },
            },
            fields:
              "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)",
          },
        },
        {
          autoResizeDimensions: {
            dimensions: {
              sheetId,
              dimension: "COLUMNS",
              startIndex: 0,
              endIndex: totalCols,
            },
          },
        },
      ],
    },
  });
}
