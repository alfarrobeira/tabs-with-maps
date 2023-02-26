
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Map from "./Map";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Augsburg</Tab>
      <Tab>Bamberg</Tab>
    </TabList>

    <TabPanel>
    <Map lng="48.3668041" lat="10.8986971" />
    </TabPanel>
    <TabPanel>
    <Map lng="49.8916513" lat="10.8875512" />
    </TabPanel>
  </Tabs>
);

