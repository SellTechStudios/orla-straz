'use client'

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { User } from 'src/payload-types'
import { extractErrorMessage } from './auth.utils'

type ResetPassword = (args: {
  password: string
  passwordConfirm: string
  token: string
}) => Promise<void>

type ChangePassword = (args: { password: string; passwordConfirm: string }) => Promise<void>

type ForgotPassword = (args: { email: string }) => Promise<void>

type Create = (args: { email: string; password: string; passwordConfirm: string }) => Promise<void>

type Login = (args: { email: string; password: string }) => Promise<User>

type Logout = () => Promise<void>

type UpdateUser = (updates: Partial<User>) => Promise<void>

type AuthContext = {
  user?: User | null
  token?: string | null
  setUser: (user: User | null) => void
  logout: Logout
  login: Login
  create: Create
  resetPassword: ResetPassword
  changePassword: ChangePassword
  forgotPassword: ForgotPassword
  updateUser: UpdateUser
  status: undefined | 'loggedOut' | 'loggedIn'
}

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>()
  const [token, setToken] = useState<string | null>(null)

  // used to track the single event of logging in or logging out
  // useful for `useEffect` hooks that should only run once
  const [status, setStatus] = useState<undefined | 'loggedOut' | 'loggedIn'>()

  const create = useCallback<Create>(async (args) => {
    let res: Response | undefined
    try {
      res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: args.email,
          password: args.password,
          passwordConfirm: args.passwordConfirm,
        }),
      })

      if (res.ok) {
        const { data, errors } = await res.json()
        if (errors) throw new Error(errors[0].message)
        setUser(data?.loginUser?.user)
        setStatus('loggedIn')
      } else {
        throw new Error(await extractErrorMessage(res))
      }
    } catch (err: unknown) {
      let message = 'Something went wrong'
      if (err instanceof Error) {
        message = err.message
      } else if (res) {
        message = await extractErrorMessage(res)
      }
      throw new Error(message)
    }
  }, [])

  const login = useCallback<Login>(async (args) => {
    let res: Response | undefined
    try {
      res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: args.email,
          password: args.password,
        }),
      })

      const json = await res.json()

      if (!res.ok || json.errors?.length) {
        throw new Error(json.errors?.[0]?.message || json.message || 'Invalid login')
      }

      setUser(json.user)
      setStatus('loggedIn')
      return json.user
    } catch (err: unknown) {
      let message = 'Something went wrong'
      if (err instanceof Error) {
        message = err.message
      } else if (res) {
        message = await extractErrorMessage(res)
      }
      throw new Error(message)
    }
  }, [])

  const logout = useCallback<Logout>(async () => {
    let res: Response | undefined

    try {
      res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        throw new Error(await extractErrorMessage(res))
      }

      setUser(null)
      setStatus('loggedOut')
    } catch (err: unknown) {
      let message = 'Logout failed'
      if (err instanceof Error) {
        message = err.message
      } else if (res) {
        message = await extractErrorMessage(res)
      }
      throw new Error(message)
    }
  }, [])

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.ok) {
          const { user: meUser, token } = await res.json()
          setUser(meUser || null)
          setToken(token || null)
          setStatus(meUser ? 'loggedIn' : undefined)
        } else {
          throw new Error('An error occurred while fetching your account.')
        }
      } catch {
        setUser(null)
        throw new Error('An error occurred while fetching your account.')
      }
    }

    fetchMe()
  }, [])

  const forgotPassword = useCallback<ForgotPassword>(async (args) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: args.email,
        }),
      })

      if (res.ok) {
        const { data, errors } = await res.json()
        if (errors) throw new Error(errors[0].message)
        setUser(data?.loginUser?.user)
      } else {
        throw new Error('Invalid login')
      }
    } catch {
      throw new Error('An error occurred while attempting to login.')
    }
  }, [])

  const resetPassword = useCallback<ResetPassword>(async (args) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/reset-password`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: args.password,
          passwordConfirm: args.passwordConfirm,
          token: args.token,
        }),
      })

      if (res.ok) {
        const { data, errors } = await res.json()
        if (errors) throw new Error(errors[0].message)
        setUser(data?.loginUser?.user)
        setStatus(data?.loginUser?.user ? 'loggedIn' : undefined)
      } else {
        throw new Error('Invalid login')
      }
    } catch {
      throw new Error('An error occurred while attempting to login.')
    }
  }, [])

  const changePassword = useCallback(
    async ({ password, passwordConfirm }: { password: string; passwordConfirm: string }) => {
      if (!user) throw new Error('User not logged in')

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, passwordConfirm }),
      })

      if (!res.ok) {
        const message = await extractErrorMessage(res)
        throw new Error(message)
      }

      const json = await res.json()
      return json
    },
    [user],
  )

  const updateUser = useCallback<UpdateUser>(
    async (updates) => {
      if (!user) return
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates),
        })

        if (res.ok) {
          const data = await res.json()
          setUser(data.doc)
        } else {
          throw new Error('Failed to update user')
        }
      } catch (error) {
        console.error(error)
        throw new Error('An error occurred while updating user data.')
      }
    },
    [user],
  )

  const values = useMemo(
    () => ({
      user,
      setUser,
      logout,
      login,
      create,
      updateUser,
      resetPassword,
      changePassword,
      forgotPassword,
      status,
      token,
    }),
    [
      user,
      logout,
      login,
      create,
      updateUser,
      resetPassword,
      changePassword,
      forgotPassword,
      status,
      token,
    ],
  )
  return <Context.Provider value={values}>{children}</Context.Provider>
}

type UseAuth = () => AuthContext

export const useAuth: UseAuth = () => useContext(Context)
