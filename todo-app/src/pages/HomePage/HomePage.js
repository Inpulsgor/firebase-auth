import React from "react";

import {
  AppLayout,
  HeaderLayout,
  // AsideLayout,
  MainLayout,
} from "../../components/Layout";
import { Tasks } from "../../components";

const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <AppLayout>
        {/* <AsideLayout /> */}
        <MainLayout>
          <Tasks />;
        </MainLayout>
      </AppLayout>
    </>
  );
};

export default MainPage;
