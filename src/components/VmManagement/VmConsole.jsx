import React from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Divider
} from '@mui/material';
import {
  Send as SendIcon,
  Refresh as RefreshIcon,
  Fullscreen as FullscreenIcon,
  Keyboard as KeyboardIcon
} from '@mui/icons-material';

const VmConsole = () => {
  const [command, setCommand] = React.useState('');
  const [output, setOutput] = React.useState([
    'Connected to VM-1234 (Ubuntu 22.04 LTS)',
    'Last login: Wed Jun 14 09:30:45 2023 from 192.168.1.1',
    'user@vm-1234:~$ _'
  ]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    setOutput(prev => [...prev, `user@vm-1234:~$ ${command}`]);
    
    // Simulate command output
    setTimeout(() => {
      setOutput(prev => [...prev, `Command '${command}' executed successfully`]);
      setOutput(prev => [...prev, 'user@vm-1234:~$ _']);
    }, 500);
    
    setCommand('');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">VM Console</Typography>
        <Box>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <FullscreenIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </Box>
      </Box>
      
      <Paper variant="outlined" sx={{ p: 2, mb: 2, height: 400, overflow: 'auto' }}>
        <Box sx={{ 
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          lineHeight: 1.5
        }}>
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </Box>
      </Paper>
      
      <Box component="form" onSubmit={handleCommandSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter command..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default VmConsole;