import React, { FC, useState } from 'react'
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import { VpnKeyOutlined } from "@mui/icons-material";

interface IListingItemButtonProps {
    navigateTo: (url: string) => void;
    url: string;
    label: string;
    children: JSX.Element;
    mini?: boolean;
}

export const ListingItemButton: FC<IListingItemButtonProps> = ({ navigateTo, url = '/', label, children, mini = false }) => {
    return (
        <ListItemButton onClick={() => navigateTo(url)} sx={{ display: mini ? { xs: '', sm: 'none' } : '' }}>
            <ListItemIcon>
                {children}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}
