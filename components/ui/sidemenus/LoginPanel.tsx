import React, { FC } from 'react'
import { AccountCircleOutlined, ConfirmationNumberOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ListingItemButton } from '@/components/atoms/ListingItemButton'

interface ILoginPanelProps {
    navigateTo: (url: string) => void
}
export const LoginPanel: FC<ILoginPanelProps> = ({ navigateTo }) => {

    return (
        <>
            <ListingItemButton navigateTo={navigateTo} url="/" label="Mis Ordenes">
                <ConfirmationNumberOutlined />
            </ListingItemButton>
        </>
    )
}
