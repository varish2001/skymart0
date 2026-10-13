const USERS_KEY = 'skymart-users'

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

export function registerUser({ name, email, password }) {
  const users = readUsers()
  const normalizedEmail = email.trim().toLowerCase()

  if (users.some((user) => user.email === normalizedEmail)) {
    return { success: false, message: 'An account with this email already exists.' }
  }

  users.push({ name: name.trim(), email: normalizedEmail, password })
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
  return { success: true }
}

export function authenticateUser(email, password) {
  const normalizedEmail = email.trim().toLowerCase()
  return readUsers().find(
    (user) => user.email === normalizedEmail && user.password === password,
  ) || null
}
