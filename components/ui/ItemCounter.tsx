import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

interface IItemCounterProps {
    currentValue: number;
    maxValue: number;

    // * Methods
    updatedQuantity: (value: number) => void;
}

export const ItemCounter: React.FC<IItemCounterProps> = ({ currentValue, maxValue, updatedQuantity }) => {
    const addOrRemove = (value: number) => {
        if (value === -1) {
            if (currentValue === 1) return;

            return updatedQuantity(currentValue - 1);
        }

        if (currentValue >= maxValue) return;

        updatedQuantity(currentValue + 1);
    }
    return (
        <Box display='flex' alignItems='center'>
            <IconButton onClick={() => addOrRemove(-1)}>
                <RemoveCircleOutline />
            </IconButton>
            <Typography sx={{ width: 40, textAlign: 'center' }}> {currentValue} </Typography>
            <IconButton onClick={() => addOrRemove(+1)}>
                <AddCircleOutline />
            </IconButton>
        </Box>
    )
}
