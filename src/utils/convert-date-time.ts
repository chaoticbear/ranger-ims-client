const convertDateTime = (dateTime: string) => {
  /**
   * This function converts a date and time string in the format "YYYY-MM-DD HH:MM" to a JavaScript Date object.
   *
   * @param {string} dateTime - The date and time string to be converted.
   * @returns {Date} - The converted JavaScript Date object.
   */

  // 2024-03-20T20:48:34.880000+00:00
  try {
    // Split the date and time string into separate parts
    const [date, timeMsZone] = dateTime.split('T')
    const [timeMs] = timeMsZone.split('+')
    const [time] = timeMs.split('.')

    // Split the date into year, month, and day
    const [year, month, day] = date.split('-')

    // Split the time into hours and minutes
    const [hours, minutes] = time.split(':')

    // Create a new Date object with the extracted parts
    const convertedDateTime = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours),
      Number(minutes),
    )

    const formatedDateTime = convertedDateTime.toLocaleString('en-US', {
      day: 'numeric',
      month: 'numeric',
      weekday: 'short',
      year: 'numeric',
    })

    return formatedDateTime
  } catch (error) {
    // Log the error
    // eslint-disable-next-line no-console
    console.error('Error:', error)

    return null
  }
}

export { convertDateTime }
