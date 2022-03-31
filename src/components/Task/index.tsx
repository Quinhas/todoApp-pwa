/* eslint-disable no-unused-vars */
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface TaskProps {
  id: string;
  desc: string;
  done: boolean;
  handleTaskClick: (id: string) => void;
  handleRemoveTask: (id: string) => void;
}

export default function Task({
  id, desc, done, handleTaskClick, handleRemoveTask,
}: TaskProps) {
  return (
    <Flex justifyContent="center" alignItems="center" gap="0.5rem">
      <Flex bg="primaryApp.100" width="100%" height="4rem" borderRadius="md" px="1rem" alignItems="center" justifyContent="space-between" transition="0.2s ease-in" cursor="pointer" onClick={() => handleTaskClick(id)} opacity={done ? '0.6' : '1'}>
        <Text textDecoration={done ? 'line-through' : ''}>{desc}</Text>
      </Flex>
      <IconButton
        colorScheme="danger"
        aria-label="Remove Task"
        icon={<FaTrash />}
        borderRadius="full"
        boxShadow="lg"
        onClick={() => handleRemoveTask(id)}
      />
    </Flex>
  );
}
