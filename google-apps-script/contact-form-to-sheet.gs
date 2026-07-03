// ---------------------------------------------------------------
// HOW TO USE:
// 1. Open your Google Sheet
// 2. Extensions → Apps Script
// 3. Paste this entire file, replacing any existing code
// 4. Deploy → New Deployment → Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the Web App URL into your .env as VITE_GOOGLE_SHEETS_WEB_APP_URL
// ---------------------------------------------------------------

const SHEET_NAME = 'Contact Form';

function doGet(e) {
  try {
    const data = e && e.parameter ? e.parameter : {};

    // Health check ping (no data fields)
    if (!data.from_name && !data.from_email) {
      return ContentService
        .createTextOutput('Hydro Canopy Analyst contact sheet endpoint is running.')
        .setMimeType(ContentService.MimeType.TEXT);
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet_(spreadsheet, SHEET_NAME);
    ensureHeaderRow_(sheet);

    sheet.appendRow([
      data.submitted_at || new Date().toLocaleString(),
      data.from_name    || '',
      data.from_email   || '',
      data.mobile       || data.phone || '',
      data.company      || '',
      data.role         || '',
      data.interested_in|| '',
      data.message      || '',
      data.to_email     || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// doPost kept as alias so both methods work
function doPost(e) {
  return doGet(e);
}

function getOrCreateSheet_(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    'Submitted At',
    'Full Name',
    'Email',
    'Phone',
    'Company',
    'Role',
    'Interested In',
    'Message',
    'Recipient Email',
  ]);
}
