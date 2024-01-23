export const calculateTimeDifference = (startTime: string, endTime: string) => {
  const [startMinutes, startSeconds] = startTime.split(':').map(Number)
  const [endMinutes, endSeconds] = endTime.split(':').map(Number)

  const startTimeInSeconds = startMinutes * 60 + startSeconds
  const endTimeInSeconds = endMinutes * 60 + endSeconds

  const timeDifferenceInSeconds = endTimeInSeconds - startTimeInSeconds

  const minutes = Math.floor(timeDifferenceInSeconds / 60)
  const seconds = Math.floor(timeDifferenceInSeconds % 60)

  const formattedDifference = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  return formattedDifference
}
