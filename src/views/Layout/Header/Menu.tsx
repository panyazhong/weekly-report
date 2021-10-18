import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { router, routerItem } from '../../../router';

const { SubMenu } = Menu;

const HeaderMenu = (props: any) => {
  const [current, setCurrent] = useState<string>('mail');
  const history = useHistory(),
    location = useLocation(),
    { pathname } = location;

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  const handleClick = (r: routerItem) => {
    setCurrent(r.path);

    history.push(r.path);
  };

  console.log(router);

  const MenuItems = router.map((r: routerItem) => {
    if (r.meta?.title && !r.children && !r.meta.hidden) {
      return (
        <Menu.Item
          key={r.path}
          icon={<MailOutlined />}
          onClick={() => {
            handleClick(r);
          }}
        >
          {r.meta?.title}
        </Menu.Item>
      );
    } else if (r.children) {
      return (
        <SubMenu key={r.name} title={r.meta?.title}>
          {r.children.map((child: any) => {
            return (
              <Menu.Item
                key={child.path}
                icon={<MailOutlined />}
                onClick={() => {
                  handleClick(child);
                }}
              >
                {child.meta?.title}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    }
  });

  return (
    <div className={'menu-box'}>
      <Menu selectedKeys={[current]} mode="horizontal">
        {MenuItems}
      </Menu>
    </div>
  );
};

export default HeaderMenu;
