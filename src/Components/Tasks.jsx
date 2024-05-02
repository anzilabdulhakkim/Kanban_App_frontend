import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`https://kanban-app-backend-zvn2.onrender.com/tasks/get`);
      setTasks(response.data);
    } 
    catch (error) {
      console.log(error);
    }
  };

  const handleAddTask = async () => {
    try {
      const response = await axios.post(`https://kanban-app-backend-zvn2.onrender.com/tasks/create`, { title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } 
    catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://kanban-app-backend-zvn2.onrender.com/tasks/delete/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <Box textAlign="center" mt={10}>
      <Stack spacing={4} align="center" mx="auto" maxW="400px">
        <FormControl>
          <FormLabel>New Task</FormLabel>
          <Input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} width="100%" />
        </FormControl>
        <Button onClick={handleAddTask}>Add Task</Button>
      </Stack>
      <Box mt={4}>
        <Text fontSize="xl" mb={2}>Tasks</Text>
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              {task.title}{' '}
              <Button size="xs" colorScheme="red" onClick={() => handleDeleteTask(task._id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Tasks;
