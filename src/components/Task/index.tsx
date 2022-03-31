import { Flex, Text } from '@chakra-ui/react';

type TaskProps = {
  desc: string;
  status: string;
}

export default function Task({ desc, status }: TaskProps) {
  return (
    <Flex bg="primaryApp.100" width="100%" height="4rem" borderRadius="md" px="1rem" alignItems="center" justifyContent="space-between">
      <Text>{desc}</Text>
      <Text>{status}</Text>
    </Flex>
  );
}
