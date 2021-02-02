import React from "react";

import {
  AppLayout,
  HeaderLayout,
  MainLayout,
  FooterLayout,
  TodoLayout,
  SidebarLayout,
  TasksLayout,
} from "components/Layout";

import {
  Header,
  Footer,
  SidebarHeader,
  SidebarList,
  SidebarFooter,
  TasksHeader,
  TasksList,
} from "components";

const MainPage = () => {
  return (
    <AppLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>

      <MainLayout>
        <TodoLayout>
          <SidebarLayout>
            <SidebarHeader />
            <SidebarList />
            <SidebarFooter />
          </SidebarLayout>

          <TasksLayout>
            <TasksHeader />
            <TasksList />
          </TasksLayout>
        </TodoLayout>
      </MainLayout>

      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
};

export default MainPage;
