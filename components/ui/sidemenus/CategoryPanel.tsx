import React, { FC } from 'react'
import { EscalatorWarningOutlined, FemaleOutlined, MaleOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ListingItemButton } from '@/components/atoms/ListingItemButton'

interface ICategoryPanelProps {
    navigateTo: (url: string) => void
}

export const CategoryPanel: FC<ICategoryPanelProps> = ({ navigateTo }) => {

    return (
        <>
            <ListingItemButton mini navigateTo={navigateTo} url="/category/men" label="Hombres">
                <MaleOutlined />
            </ListingItemButton>
            <ListingItemButton mini navigateTo={navigateTo} url="/category/women" label="Mujeres">
                <FemaleOutlined />
            </ListingItemButton>
            <ListingItemButton mini navigateTo={navigateTo} url="/category/kid" label="Niños">
                <EscalatorWarningOutlined />
            </ListingItemButton>
        </>
    )
}
