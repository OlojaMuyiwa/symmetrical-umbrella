import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  Autocomplete,
  useMantineTheme,
} from "@mantine/core";
import { DropzoneButton } from "./Dropzone";
import MenuComp from "./Menu";

export default function Demo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
        <Autocomplete
          label="Your favorite Rick and Morty character"
          placeholder="Pick one"
          data={[
            { value: "Rick", group: "Used to be a pickle" },
            { value: "Morty", group: "Never was a pickle" },
            { value: "Beth", group: "Never was a pickle" },
            { value: "Summer", group: "Never was a pickle" },
          ]}
        />
        <DropzoneButton />
        <MenuComp />
      </AppShell>
    </>
  );
}
