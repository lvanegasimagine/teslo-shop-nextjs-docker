import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader, ListItemButton } from "@mui/material"
import { LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"
import { UiContext, AuthContext } from "@/context"
import { useRouter } from "next/router"
import { AdminPanel, CategoryPanel, LoginPanel } from "./sidemenus"
import { ListingItemButton } from "../atoms/ListingItemButton"


export const SideMenu = () => {
    const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
    const { isLoggedIn, user, logout } = useContext(AuthContext)
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return

        navigateTo(`/search/${searchTerm}`);
    }

    const navigateTo = (url: string) => {
        toggleSideMenu();
        router.push(url);
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={toggleSideMenu}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>
                <List>
                    <ListItem>
                        <Input
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
                                        onClick={onSearchTerm}
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>
                    {
                        isLoggedIn && <LoginPanel navigateTo={navigateTo} />
                    }
                    <CategoryPanel navigateTo={navigateTo} />

                    {isLoggedIn ? (

                        <ListItemButton onClick={logout} sx={{ color: 'red' }}>
                            <ListItemIcon>
                                <LoginOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Salir'} />
                        </ListItemButton>
                    ) : (
                        <ListingItemButton navigateTo={navigateTo} url={`/auth/login?p=${router.asPath}`} label="Ingresar">
                            <VpnKeyOutlined />
                        </ListingItemButton>
                    )}

                    {/* Admin */}

                    {user?.role === 'admin' && <AdminPanel navigateTo={navigateTo} />}
                </List>
            </Box>
        </Drawer>
    )
}