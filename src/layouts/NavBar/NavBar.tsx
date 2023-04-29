import { Box, Tab, Tabs } from "@mui/material";

interface Props {
  value: string;
  tabs: string[];
  notifications?: { tab: string; value: number }[] | undefined;
  handleChange: Function;
}

export default function NavBar({
  value,
  tabs,
  notifications,
  handleChange,
}: Props) {
  return (
    <Box className="annie-navbar">
      <Tabs
        className="annie-navbar-tabs"
        value={tabs.indexOf(value)}
        onChange={(event, newValue) => {
          handleChange(tabs[newValue]);
        }}
        centered
      >
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              label={tab}
              icon={
                notifications &&
                notifications.map((e) => e.tab).indexOf(tab) > -1 ? (
                  <Box>
                    {
                      notifications[
                        notifications.map((e) => e.tab).indexOf(tab)
                      ].value
                    }
                  </Box>
                ) : (
                  <></>
                )
              }
              iconPosition="end"
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
