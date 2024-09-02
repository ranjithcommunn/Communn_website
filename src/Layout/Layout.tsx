import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'




export const Layout = () => {
    return (
        <>
            <Header />

            <Box>
                <Outlet />
            </Box>
            <Footer />

        </>
    )
}
