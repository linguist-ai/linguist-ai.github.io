import { Box, Container, Flex, List, Stack, Text, Title } from "@mantine/core";
import { UserInfoCard } from "./UserInfoCard";

const OurTeam = () => {
  return (
    <Container maw={1200}>
      <Box m={20}>
        <Flex direction="column" gap={20}>
          <Flex direction="column" align="center" gap={20}>
            <Title order={2}>Our Team</Title>
            <Flex gap={25}>
              <UserInfoCard
                name="Kardelen Ceren"
                imgSrc="/images/team/kalender-ceren.jpg"
              />
              <UserInfoCard
                name="Selim Can Güler"
                imgSrc="/images/team/selim-can-guler.webp"
              />
              <UserInfoCard
                name="Elif Kervan"
                imgSrc="/images/team/elif-kervan.jpg"
              />
              <UserInfoCard
                name="Tolga Özgün"
                imgSrc="/images/team/tolga-ozgun.png"
              />
              {/* <UserInfoCard name="Yağız Can Aslan" /> */}
            </Flex>
          </Flex>
          <Stack>
            <Title order={2}>Our Supervisor</Title>
            <List>
              <List.Item>Halil Altay Güvenir</List.Item>
            </List>
          </Stack>
          <Stack>
            <Title order={2}>Our Innovation Expert</Title>
            <List>
              <List.Item>Ahmet Eren Başak</List.Item>
            </List>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default OurTeam;
