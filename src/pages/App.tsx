import {
  Button,
  Flex, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { v4 } from 'uuid';
import Task from '../components/Task';

function App() {
  const [tasks, setTasks] = useState<{ id: string; desc: string, done: boolean }[]>([]);
  const [taskDesc, setTaskDesc] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  function addTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (!taskDesc.trim()) {
      return;
    }
    const newTask = { id: v4(), desc: taskDesc, done: false };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskDesc('');
    onClose();
  }

  function handleTaskClick(id: string) {
    setTasks((prevState) => prevState.map((task) => (
      task.id === id ? { ...task, done: !task.done } : task
    )));
  }

  function handleRemoveTask(id: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  return (
    <>
      <Flex justifyContent="center" bg="primaryApp.300" boxShadow="lg" height="3.5rem" alignItems="center">
        <Heading>ToDo App</Heading>
      </Flex>
      <Flex height="max-content" flexGrow={1} p="1rem" pt="2rem" justifyContent="center">
        {tasks.length > 0 && (
          <Flex flexDirection="column" width={['100%', '70%']} gap="1rem" transition="0.2s ease-in">
            {
              tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  desc={task.desc}
                  done={task.done}
                  handleTaskClick={handleTaskClick}
                  handleRemoveTask={handleRemoveTask}
                />
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
            <Button colorScheme="complementaryApp" leftIcon={<FaPlus />} onClick={onOpen}>Adicionar Tarefa</Button>
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
            colorScheme="complementaryApp"
            aria-label="Add Task"
            icon={<FaPlus />}
            borderRadius="full"
            width="4rem"
            height="4rem"
            right="1rem"
            bottom="1rem"
            boxShadow="lg"
            onClick={onOpen}
          />
        )}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent as="form">
          <ModalHeader>Adicionar Tarefa</ModalHeader>
          <ModalCloseButton />
          <Flex as={ModalBody}>
            <Input type="text" name="desc" value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} placeholder="Descrição da Tarefa" />
          </Flex>
          <ModalFooter>
            <Button colorScheme="primaryApp" variant="ghost" mr={3} onClick={onClose} type="button">
              Voltar
            </Button>
            <Button colorScheme="complementaryApp" onClick={(e) => addTask(e)} disabled={!taskDesc.trim()} type="submit">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
