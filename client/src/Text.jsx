import { Box, Button, LinearProgress,  Paper,  TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import Markdown from './Markdown'

function Text() {
    document.title = "ChatGPT | Text"
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [chats, setChats] = useState([])
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    const getCompletion = async () => {
        setError(false)
        setLoading(true)
        try{
            setChats([...chats, {message: capitalize(message)}])
            const res = await axios.post('http://localhost:8080/api/text', {prompt: message + ". Give answer in markdown format with language code. For example: ```python\nprint('Hello World')\n```"})
            setChats([...chats, {message: capitalize(message)}, {message: res.data}])
            setLoading(false)
            setMessage('')
        }
        catch(err){
            setError(true)
        }
    }
    if(error) return (
        <Box sx={{width:'100%', height:'100vh', display:'flex', flexDirection:'column'}}>
            <Box sx={{flexGrow:1, padding: "40px 70px"}}>
                {/* Screen */}
                <h1>Something went wrong!</h1>
            </Box>
            <Box sx={{display:'flex' , direction:'row', padding: 2, gap: 2}} >
                {/* Input */}
                <TextField id="outlined-basic" label="Ask here.." variant="outlined" sx={{flexGrow:1}} value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button variant="contained" color="primary" disableElevation onClick={getCompletion} disabled={loading} >Submit</Button>
            </Box>
        </Box>
    )
        
  return (
    <Box sx={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', bgcolor:"snow"}}>
        <Box sx={{flexGrow:1, padding: "40px 70px", overflowY: 'auto', display:'flex', flexDirection:'column', gap:4}}>
            {/* Screen */}
            {chats.map((chat, index) => (
                // if index is even, it is a user message so align it to right else it is a bot message so align it to left
                <Paper 
                    elevation={3} 
                    sx={{
                        padding: 2, 
                        borderRadius: 4, 
                        backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5', 
                        width:'fit-content', 
                        // if index is even, it is a user message so align it to right else it is a bot message so align it to left
                        alignSelf: index % 2 === 0 ? 'flex-end' : 'flex-start',
                        position: 'relative',
                }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: -20,
                            left: index % 2 === 0 ? 'unset' : -10,
                            right: index % 2 === 0 ? -10 : 'unset',
                            fontSize: 12,
                            color: 'grey',
                            // bgcolor: 'white',
                            // padding: 1,
                            // borderRadius: 2,
                            // boxShadow: 1,
                        }}
                    >
                        {new Date().toLocaleTimeString()}
                    </Box>
                    <Markdown markdown={chat.message} />
                </Paper>

            ))}
            {loading && <LinearProgress />}
        </Box>
        <Box sx={{display:'flex' , direction:'row', padding: 2, gap: 2}} >
            {/* Input */}
            <TextField id="outlined-basic" label="Ask here.." variant="filled" sx={{flexGrow:1}} value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button variant="contained" color="primary" disableElevation onClick={getCompletion} disabled={loading} >Submit</Button>
        </Box>
    </Box>
  )
}

export default Text