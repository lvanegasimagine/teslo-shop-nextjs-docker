import React, { FC } from 'react'
import { AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { ListingItemButton } from '@/components/atoms/ListingItemButton'

interface IAdminPanelProps {
  navigateTo: (url: string) => void
}

export const AdminPanel: FC<IAdminPanelProps> = ({ navigateTo }) => {
  return (
    <>
      <Divider />
      <ListSubheader>Admin Panel</ListSubheader>
      <ListingItemButton navigateTo={navigateTo} url="/" label="Productos">
        <CategoryOutlined />
      </ListingItemButton>
      <ListingItemButton navigateTo={navigateTo} url="/" label="Ordenes">
        <CategoryOutlined />
      </ListingItemButton>
      <ListingItemButton navigateTo={navigateTo} url="/" label="Usuarios">
        <CategoryOutlined />
      </ListingItemButton>
    </>
  )
}