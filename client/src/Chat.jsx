import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

function Chat() {
  return (
    <Stack direction="column">
        <Box 
            sx={
                {
                    flexGrow: 1
                }
            }
        >
            {/* Screen */}
        </Box>
        {/* Input */}
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Stack>
  )
}

export default Chat