import React from "react";

import {
  AppLayout,
  HeaderLayout,
  MainLayout,
  FooterLayout,
  TodoLayout,
} from "../../components/Layout";
import { Header, Tasks, Footer } from "../../components";

const MainPage = () => {
  return (
    <AppLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>

      <MainLayout>
        <TodoLayout>
          <Tasks />;
        </TodoLayout>
      </MainLayout>

      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
};

export default MainPage;
