import { UiContext } from '@/context';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Link, Badge, Input, InputAdornment } from '@mui/material';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext, useState, KeyboardEvent } from 'react';

export const Navbar = () => {
    const { push, asPath } = useRouter();
    const { toggleSideMenu } = useContext(UiContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return
        push(`/search/${searchTerm}`);
    }

    return (
        <AppBar>
            <Toolbar>
                <Link href='/' display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
                <Box flex={1} />
                <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}
                    className="fadeIn">
                    <Link href="/category/men">
                        <Button color={asPath === '/category/men' ? 'secondary' : 'info'}>Hombres</Button>
                    </Link>
                    <Link href="/category/women">
                        <Button color={asPath === '/category/women' ? 'secondary' : 'info'}> Mujeres</Button>
                    </Link>
                    <Link href="/category/kid">
                        <Button color={asPath === '/category/kid' ? 'secondary' : 'info'}>Niños</Button>
                    </Link>
                </Box>
                <Box flex={1} />

                {/* Button Desktop Big */}


                {
                    isSearchVisible ? (
                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}
                        >

                            <Input
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSearchTerm(e.target.value)}
                                type='text'
                                placeholder="Buscar..."
                                onKeyPress={(e: KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' ? onSearchTerm() : null}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Box>

                    )
                        : (
                            <IconButton
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                onClick={() => {
                                    setIsSearchVisible(true)
                                    setSearchTerm('')
                                }}
                                className='fadeIn'>
                                <SearchOutlined />
                            </IconButton>
                        )
                }


                {/* Button Desktop Mobile */}
                <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }} onClick={toggleSideMenu}>
                    <SearchOutlined />
                </IconButton>
                <Link href='/cart'>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
                <Button onClick={toggleSideMenu}>Menu</Button>
            </Toolbar>
        </AppBar>
    )
}
