import React from 'react'
import { Button, Drawer, IconButton, Stack} from '@mui/material'
import { Menu } from '@mui/icons-material'

function Navbar() {
    const [open, setOpen] = React.useState(false)
    
    return (
        <>
            <IconButton 
                size='large' 
                onClick={() => setOpen(true)} 
                edge="start" 
                aria-label="menu" 
                sx={
                    {
                        top: 10,
                        left: 20,
                        boxShadow: 2,
                        position: 'absolute',
                        zIndex: 1000,
                    }
                }
            >
                <Menu  />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Stack width={200} textAlign={'center'} role="presentation" spacing={2} padding={3} direction="column" >
                    <Button  variant="contained" color="primary" href="/text" disableElevation >Text Completion</Button>
                    <Button variant="contained" color="primary" href="/chat" disableElevation >Chat completion</Button>
                </Stack>
            </Drawer>
        </>
    )
}

export default Navbar