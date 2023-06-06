import { ShopLayout } from '@/components/layout'
import { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { DataGrid, GridColDef, GridRowsProp, GridRenderCellParams } from '@mui/x-data-grid'
import { Chip } from '@mui/material'
import Link from 'next/link';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },
    {
        field: 'paid', headerName: 'Pagada',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label="pagada" variant="outlined" />
                    : <Chip color='error' label="No pagada" variant="outlined" />
            )
        },
    },
    {
        field: 'orden',
        headerName: 'Ver Orden',
        sortable: false,
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Link href={`/orders/${params.row.id}`} passHref>
                    Ver Orden
                </Link>
            )
        },
    }
];

const rows: GridRowsProp = [
    { id: 1, paid: false, fullname: 'Luis Vanegas' },
    { id: 2, paid: true, fullname: 'Lionel Messi' },
    { id: 3, paid: false, fullname: 'Cristiano Ronaldo' },
    { id: 4, paid: true, fullname: 'Robert Lewandoswky' },
    { id: 5, paid: true, fullname: 'Jack Black' },
    { id: 6, paid: false, fullname: 'Mario Bros' },
    { id: 7, paid: false, fullname: 'Luigi' },
    { id: 8, paid: true, fullname: 'Ricardo Montaner' },
    { id: 9, paid: false, fullname: 'Jack Bauer' },
    { id: 10, paid: false, fullname: 'James Bond' },
    { id: 11, paid: true, fullname: 'Taylor Swift' },
];

const HistoryPage: NextPage = () => {
    return (
        <ShopLayout title={'Historial de Ordenes'} pageDescription={'Historial de ordenes del cliente'}>
            <Typography variant="subtitle1" component="h1">Historial de Ordenes</Typography>
            <Grid container>
                <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        autoHeight
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 5 } },
                        }}
                        pageSizeOptions={[5, 10, 25]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage