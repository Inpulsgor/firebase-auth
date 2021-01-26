import React from "react";

import { AppLayout, HeaderLayout, MainLayout } from "../../components/Layout";
import { Header, Tasks } from "../../components";

const MainPage = () => {
  return (
    <>
      <AppLayout>
        <HeaderLayout>
          <Header />
        </HeaderLayout>

        <MainLayout>
          <Tasks />;
        </MainLayout>
      </AppLayout>
    </>
  );
};

export default MainPage;
