import { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://kanban-app-backend-zvn2.onrender.com/auth/login`, formData);
      toast.success('Login successful! Redirecting to tasks.');
      console.log(response.data)
      navigate('/');
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <Box mt={10}>
      <Heading size="md" textAlign="center" mb={2}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mx="auto" maxW="300px">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" name="username" value={formData.username} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">Login</Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
