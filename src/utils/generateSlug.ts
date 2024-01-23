export const generateSlug = (artist: string, title: string) => {
  const combinedString = `${artist} ${title}`
  const slug = combinedString
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .trim()

  return slug
}
