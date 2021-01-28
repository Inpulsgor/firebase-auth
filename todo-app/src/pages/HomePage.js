import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// import * as colorsOperations from "../../redux/colors/colorsOperations";
import * as categoriesOperations from "../redux/categories/categoriesOperations";
// Layout
import {
  AppLayout,
  HeaderLayout,
  MainLayout,
  FooterLayout,
  TodoLayout,
  SidebarLayout,
  TasksLayout,
} from "../components/Layout";
// Components
import {
  Header,
  Footer,
  SidebarHeader,
  SidebarList,
  SidebarFooter,
} from "../components";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperations.fetchCategories());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(colorsOperations.fetchColors());
  // }, [dispatch]);

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

          <TasksLayout></TasksLayout>
        </TodoLayout>
      </MainLayout>

      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
};

export default MainPage;
