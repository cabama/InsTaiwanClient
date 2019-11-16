import React from 'react'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Face from '@material-ui/icons/Face'

export const AdminList = [
  { icon: <VerifiedUser />, title: 'Profile', path: '/profile' },
]

export const NoAdminList = [
  { icon: <Face />, title: 'Login', path: '/login' },
]