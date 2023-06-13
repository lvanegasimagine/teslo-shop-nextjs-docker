import { ISize } from '@/interfaces';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react'

interface ISizeSelectorProps {
    selectedSize?: ISize;
    sizes: ISize[];
    onSelectedSize: (size: ISize) => void;
}

export const SizeSelector: React.FC<ISizeSelectorProps> = ({ selectedSize, sizes, onSelectedSize }) => {
    return (
        <Box>
            {
                sizes.map(size => (
                    <Button
                        key={size}
                        size='small'
                        color={selectedSize === size ? 'success' : 'info'}
                        onClick={() => onSelectedSize(size)}
                    >{size}</Button>
                ))}
        </Box>
    )
}
