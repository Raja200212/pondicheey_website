/**
 * Google Sheets Submission Service
 * Sends registration & reel submission data to Google Apps Script Web App.
 */

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL || ''

export async function submitToGoogleSheet(submissionData) {
  if (!SCRIPT_URL) {
    console.warn(
      'VITE_GOOGLE_SHEET_SCRIPT_URL is not set. Saved to local storage. Deploy Google Apps Script to enable live sheet sync.'
    )
    return { success: true, localOnly: true }
  }

  // Generate crisp Indian standard formatted timestamp e.g. "23 Sep 2026, 04:50 PM"
  const now = new Date()
  const dateFormatted = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
  const timeFormatted = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  const fullDateTime = `${dateFormatted}, ${timeFormatted}`

  const payload = {
    timestamp: fullDateTime,
    date: fullDateTime,
    submissionDate: fullDateTime,
    registrationId: submissionData.registrationId,
    fullName: submissionData.fullName,
    whatsapp: `+91 ${submissionData.whatsapp}`,
    email: submissionData.email,
    district: submissionData.district,
    igHandle: `@${submissionData.igHandle.replace(/^@/, '')}`,
    reelLink: submissionData.reelLink,
    description: submissionData.description,
    script: submissionData.crew?.script || 'Self',
    cast: submissionData.crew?.cast || 'Self',
    camera: submissionData.crew?.camera || 'Self',
    editing: submissionData.crew?.editing || 'Self',
    voice: submissionData.crew?.voice || 'Self',
    music: submissionData.crew?.music || 'N/A',
    collabCheck: submissionData.collabCheck ? 'Yes' : 'No'
  }

  try {
    const formData = new URLSearchParams()
    Object.keys(payload).forEach(key => {
      formData.append(key, payload[key])
    })

    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    })

    return { success: true }
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error)
    return { success: false, error }
  }
}
