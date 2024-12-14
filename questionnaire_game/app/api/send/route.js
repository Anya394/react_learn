import { google } from 'googleapis';

export async function GET(req) {
  return new Response(JSON.stringify({text: "This is GET"}));
}

export async function POST(req) 
{
  try
  {
    // Auth
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
    const sheets = google.sheets({ version: 'v4', auth });

    /*const range = `Sheet1!A2:C2`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });*/

    //const content = await req.body.json();
    //console.log(content)
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: `Sheet1!A:C`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        "majorDimension": "ROWS",
        "values": [[req.body.a,req.body.b,req.body.c]]
      }
    });

    return new Response(req.body);
  }
  catch (e)
  {
      return new Response(JSON.stringify("Error:" + e.message));
  }
}