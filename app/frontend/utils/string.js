export function humanize(str) {
  return str
    // Convert snake_case to spaces
    .replace(/_/g, ' ')
    // Convert camelCase to spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Capitalize first letter of each word
    .replace(/\b\w/g, c => c.toUpperCase())
    // Remove multiple spaces
    .replace(/\s+/g, ' ')
    .trim();
}