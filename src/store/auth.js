import { proxy } from 'valtio'

const store = proxy({
  token: null,
  profile: null
})

export const checkAuthorization = () => {
  const token = getToken()
  const profile = getProfile()

  if (token != null) {
    login({ token, profile })
  } else {
    console.log('not authenticated')
  }
}

export const login = ({ token, profile }) => {
  if (token) {
    store.token = token
    store.profile = profile

    console.log(token)
    localStorage.setItem('token', token)
    localStorage.setItem('profile', JSON.stringify(profile))
  } else {
    // login error
  }
}

export const logout = () => {
  clearToken()
  clearProfile()

  store.token = null
  store.profile = null
}

export function getToken() {
  try {
    const token = localStorage.getItem('token')
    return token
  } catch (err) {
    clearToken()
    return null
  }
}

export function getProfile() {
  try {
    const profile = localStorage.getItem('profile')
    return JSON.parse(profile)
  } catch (err) {
    clearProfile()
    return null
  }
}

export function clearToken() {
  // localStorage.removeItem('token')
}

export function clearProfile() {
  // localStorage.removeItem('profile')
}

export default store
