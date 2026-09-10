// Derives a short initials string from a full name for the avatar UI.
// "Marleyges Khamis" -> "MK"
// "John Doe"         -> "JD"
// "John"              -> "JO"
export function getInitials(fullName = "") {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return "?";

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  const first = parts[0][0];
  const last = parts[parts.length - 1][0];
  return `${first}${last}`.toUpperCase();
}
