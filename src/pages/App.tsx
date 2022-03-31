import {
  Button,
  Flex, Heading, IconButton, Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Task from '../components/Task';

const tarefas = [
  {
    desc: 'Task 1',
    status: 'Teste',
  },
  {
    desc: 'Task 2',
    status: 'Teste',
  },
  {
    desc: 'Task 3',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
  {
    desc: 'Task 4',
    status: 'Teste',
  },
];

function App() {
  const [tasks] = useState<{ desc: string, status: string }[]>(tarefas);

  return (
    <>
      <Flex justifyContent="center" bg="primaryApp.500" boxShadow="lg" height="3.5rem" alignItems="center">
        <Heading>TodoApp</Heading>
      </Flex>
      <Flex height="max-content" flexGrow={1} p="1rem">
        {tasks.length > 0 && (
          <Flex flexDirection="column" width="100%" gap="1rem">
            {
              tasks.map((task) => (
                <Task desc={task.desc} status={task.status} />
              ))
            }
          </Flex>
        )}
        {tasks.length === 0 && (
          <Flex flexDirection="column" gap="1rem">
            <Text fontSize="1.125rem" textColor="gray.600">
              Você não possui tarefas pendentes!
              Clique no botão abaixo para adicionar uma tarefa.
            </Text>
            <Button colorScheme="complementaryApp" leftIcon={<FaPlus />}>Adicionar Tarefa</Button>
          </Flex>
        )}
      </Flex>
      <Flex as="footer" boxShadow="lg" bottom={0} p="1.5rem" justifyContent="space-between">
        <Text>
          RA: 601314 - Lucas Santana
        </Text>
        {tasks.length !== 0 && (
          <IconButton
            position="fixed"
            colorScheme="primaryApp"
            aria-label="Add Task"
            icon={<FaPlus />}
            borderRadius="full"
            width="4rem"
            height="4rem"
            right="1rem"
            bottom="1rem"
            boxShadow="lg"
          />
        )}
      </Flex>
    </>
  );
}

export default App;
