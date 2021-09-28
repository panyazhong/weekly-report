import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "../views/Layout";
import ReactGridLayout from "../views/ReactGridLayout";
import Dashboard from "../views/Dashboard";
import ExcelRead from "../views/Excel";
import BraftEditor from "../views/BraftEditor";
import UserSetting from "../views/UserSetting";

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
  {
    name: "BraftEditor",
    path: "/braft-editor",
    component: BraftEditor,
    meta: {
      title: "BraftEditor",
    },
  },
  {
    name: "UserSetting",
    path: "/user-setting",
    component: UserSetting,
    meta: {
      hidden: true,
    },
  },
];

interface metaItem {
  title?: string;
  hidden?: boolean;
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
  let RouteList: any[] = [];
  router.forEach((r: routerItem, index: number) => {
    if (r.redirect) {
      RouteList.push(
        <Route exact path={r.path} key={index}>
          <Redirect to={r.redirect}></Redirect>
        </Route>
      );
    } else if (r.children) {
      r.children.forEach((child: routerItem, childIndex: number) => {
        RouteList.push(
          <Route
            exact
            path={child.path}
            component={child.component}
            key={`${index}-${childIndex}`}
          ></Route>
        );
      });
    } else {
      RouteList.push(
        <Route exact path={r.path} key={index} component={r.component}></Route>
      );
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
