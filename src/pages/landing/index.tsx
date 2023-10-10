import { Box, Container, Flex, Space, Text, Title } from "@mantine/core";

const LandingPage = () => {
  return (
    <Container maw={1200}>
      <Title order={1}>Linguist AI</Title>
      <Space h={30} />
      <Flex direction="row" gap={20}>
        <Box maw={400}>
          <Text>
            One of the most challenging parts of learning a new language is to
            grasp new words and understand their meanings within the context of
            a conversation.
          </Text>
        </Box>
        <Box maw={400}>
          <Text>
            We aim to solve this problem by providing a platform that allows
            users to learn new words and their meanings while interacting with a
            chatbot, having conversations of their preference.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default LandingPage;
