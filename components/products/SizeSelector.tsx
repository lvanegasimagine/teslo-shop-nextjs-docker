import { ISize } from '@/interfaces';
import { Box, Button } from '@mui/material';
import React from 'react'

interface ISizeSelectorProps {
    selectedSize: ISize;
    sizes: ISize[];
}

export const SizeSelector: React.FC<ISizeSelectorProps> = ({ selectedSize, sizes }) => {
    return (
        <Box>
            {sizes.map(size => (<Button key={size} size='small' color={selectedSize === size ? 'success' : 'info'}>{size}</Button>))}
        </Box>
    )
}
