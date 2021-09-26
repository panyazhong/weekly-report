import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../views/Layout";
import ReactGridLayout from "../views/ReactGridLayout";
import Dashboard from "../views/Dashboard";
import ExcelRead from "../views/Excel";

export const router = [
  {
    name: "index",
    path: "/",
    redirect: "/dashboard",
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    meta: {
      title: "概览",
    },
  },
  {
    name: "reactGridLayout",
    path: "/react-grid-layout",
    component: ReactGridLayout,
    meta: {
      title: "弹性布局",
    },
  },
  {
    name: "excel",
    path: "/excel",
    component: ReactGridLayout,
    meta: {
      title: "excel",
    },
    children: [
      {
        name: "excelRead",
        path: "/excel/excel-read",
        component: ExcelRead,
        meta: {
          title: "excel表格",
        },
      },
    ],
  },
];

interface metaItem {
  title: string;
}

export interface routerItem {
  name: string;
  path: string;
  component?: any;
  children?: routerItem[];
  redirect?: string;
  meta?: metaItem;
}

const Router = () => {
  const RouteList = router.map((r: routerItem, index: number) => {
    if (r.redirect) {
      return (
        <Route exact path={r.path} key={index}>
          <Redirect to={r.redirect}></Redirect>
        </Route>
      );
    } else {
      if (r.children) {
        const childList = r.children.map((child: routerItem) => {
          return (
            <Route
              exact
              path={child.path}
              component={child.component}
              key={child.name}
            ></Route>
          );
        });

        return <Route>{childList}</Route>;
      } else {
        return (
          <Route
            exact
            path={r.path}
            component={r.component}
            key={index}
          ></Route>
        );
      }
    }
  });

  return (
    <div>
      <HashRouter>
        <Layout>
          <Switch>{RouteList}</Switch>
        </Layout>
      </HashRouter>
    </div>
  );
};

export default Router;
