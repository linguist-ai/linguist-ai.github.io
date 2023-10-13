import { Grid, SimpleGrid, Text, ThemeIcon, Title, rem } from "@mantine/core";
import {
  IconCoffee,
  IconLanguage,
  IconMathIntegral,
  IconMessageChatbot,
} from "@tabler/icons-react";
import classes from "./FeaturesSection.module.css";

const features = [
  {
    icon: IconMessageChatbot,
    title: "Adaptive Chatbot Conversations",
    description:
      "Engage in personalized conversations tailored to your language proficiency level, introducing new words and phrases in context.",
  },
  {
    icon: IconLanguage,
    title: "Academic Wordlist Integration",
    description:
      "Access specialized vocabulary lists such as AWL and IELTS, or create your own wordlist from documents, enhancing your language proficiency for specific contexts.",
  },
  {
    icon: IconMathIntegral,
    title: "Immersive Vocabulary Integration",
    description:
      "Explore a dynamic range of words integrated into natural conversations, helping you grasp their usage and meaning in real-life contexts.",
  },
  {
    icon: IconCoffee,
    title: "Interactive Scenario Simulations",
    description:
      "Immerse yourself in various scenarios like cafes, movies, or hobbies, and practice English within those contexts to enhance practical language skills.",
  },
];

export function FeaturesSection() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={`${classes.wrapper}`} id="features">
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            Linguist AI: Your Personalized English Learning Companion
          </Title>
          <Text c="dimmed">
            Embark on a personalized language learning journey with our advanced
            chatbot, offering an array of vocabulary, interactive scenarios, and
            seamless progress tracking tools, designed to make your English
            learning experience engaging and effective.
          </Text>

          {/* <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Learn more
          </Button> */}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
