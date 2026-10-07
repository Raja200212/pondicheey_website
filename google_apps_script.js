function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lock = LockService.getScriptLock();
    
    // Wait for up to 5 seconds for other processes to finish.
    lock.waitLock(5000);
    
    const data = e.parameter;
    
    // Prefix is WTL-RRC-10. We will autogenerate the suffix (01, 02, 03...).
    const prefix = 'WTL-RRC-10';
    let nextCount = 1;
    
    // Find the last Registration ID to determine the next one
    const lastRow = sheet.getLastRow();
    
    if (lastRow > 1) {
      // Assuming headers are in row 1
      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const idColIndex = headers.indexOf('registrationId') + 1;
      
      if (idColIndex > 0) {
        const lastId = sheet.getRange(lastRow, idColIndex).getValue();
        if (lastId && lastId.toString().indexOf(prefix) === 0) {
          const numPart = lastId.toString().replace(prefix, '');
          if (!isNaN(parseInt(numPart, 10))) {
            nextCount = parseInt(numPart, 10) + 1;
          }
        }
      }
    }
    
    // Pad the count with leading zero (01, 02...)
    let paddedCount = nextCount.toString();
    if (paddedCount.length < 2) {
      paddedCount = '0' + paddedCount;
    }
    
    const newRegistrationId = prefix + paddedCount;
    
    // Create the row data based on the received parameters
    const rowData = [
      data.timestamp || new Date().toISOString(),
      newRegistrationId,
      data.fullName || '',
      data.whatsapp || '',
      data.email || '',
      data.district || '',
      data.igHandle || '',
      data.reelLink || '',
      data.description || '',
      data.script || '',
      data.cast || '',
      data.camera || '',
      data.editing || '',
      data.voice || '',
      data.music || '',
      data.collabCheck || ''
    ];
    
    // Append the row to the sheet so the next request sees it!
    sheet.appendRow(rowData);
    
    lock.releaseLock();
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success', 
        'registrationId': newRegistrationId 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
