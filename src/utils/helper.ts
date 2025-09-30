export const downloadFile = (blob: any, fileName: any, contentType: any) => {
  const link = document.createElement('a')

  link.href = window.URL.createObjectURL(blob)
  link.download = fileName

  // Append the anchor element to the document body
  document.body.appendChild(link)

  // Trigger a click event to download the file
  link.click()

  // Remove the anchor element from the document body
  document.body.removeChild(link)
}

export function truncateDescription(description: string, maxLength: number) {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...'
  }
  return description
}
