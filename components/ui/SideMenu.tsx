import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader, ListItemButton } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { ChangeEvent, KeyboardEvent, useContext, useState } from "react"
import { UiContext, AuthContext } from "@/context"
import { useRouter } from "next/router"


export const SideMenu = () => {
    const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
    const { isLoggedIn, user } = useContext(AuthContext)
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
                        isLoggedIn && (
                            <>
                                <ListItemButton onClick={() => navigateTo('')}>
                                    <ListItemIcon>
                                        <AccountCircleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Perfil'} />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <ConfirmationNumberOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary={'Mis Ordenes'} />
                                </ListItemButton>
                            </>
                        )
                    }
                    <ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/men')}>
                        <ListItemIcon>
                            <MaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Hombres'} />
                    </ListItemButton>

                    <ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/women')}>
                        <ListItemIcon>
                            <FemaleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Mujeres'} />
                    </ListItemButton>

                    <ListItemButton sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/kid')}>
                        <ListItemIcon>
                            <EscalatorWarningOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Niños'} />
                    </ListItemButton>

                    {isLoggedIn ? (
                        <ListItemButton>
                            <ListItemIcon>
                                <LoginOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Salir'} />
                        </ListItemButton>
                    ) : (
                        <ListItemButton onClick={() => navigateTo('/auth/login')}>
                            <ListItemIcon>
                                <VpnKeyOutlined />
                            </ListItemIcon>
                            <ListItemText primary={'Ingresar'} />
                        </ListItemButton>
                    )}

                    {/* Admin */}

                    {user?.role === 'admin' && (
                        <>
                            <Divider />
                            <ListSubheader>Admin Panel</ListSubheader>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CategoryOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Productos'} />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ConfirmationNumberOutlined />
                                </ListItemIcon>
                                <ListItemText primary={'Ordenes'} />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <AdminPanelSettings />
                                </ListItemIcon>
                                <ListItemText primary={'Usuarios'} />
                            </ListItemButton>
                        </>
                    )}
                </List>
            </Box>
        </Drawer>
    )
}