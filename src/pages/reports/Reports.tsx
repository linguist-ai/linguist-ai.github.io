import { Anchor, Box, Container, Stack, Title } from "@mantine/core";

const Reports = () => {
  return (
    <Container>
      <Title order={2}>Reports</Title>
      <Box m={20}>
        <Stack>
          <Anchor href="/pdf/reports/LinguistAI_Project_Information_Form.docx">
            Project Information Form
          </Anchor>
        </Stack>
      </Box>
    </Container>
  );
};

export default Reports;
