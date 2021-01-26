import React from "react";

import { AppLayout, AsideLayout, MainLayout } from "../../components/Layout";
import { Tasks } from "../../components";

const MainPage = () => {
  return (
    <AppLayout>
      {/* <AsideLayout /> */}
      <MainLayout>
        <Tasks />;
      </MainLayout>
    </AppLayout>
  );
};

export default MainPage;
