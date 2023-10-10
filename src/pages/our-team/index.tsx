import { Box, Container, Flex, List, Text, Title } from "@mantine/core";

const OurTeam = () => {
  return (
    <Container maw={1200}>
      <Box m={20}>
        <Flex direction="column" gap={20}>
          <Title order={3}>Team Members</Title>
          <Text>
            <List>
              <List.Item>Selim Can Güler</List.Item>
              <List.Item>Kardelen Ceren</List.Item>
              <List.Item>Yağız Can Aslan</List.Item>
              <List.Item>Tolga Özgün</List.Item>
              <List.Item>İlkim Elif Kervan</List.Item>
            </List>
          </Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default OurTeam;
