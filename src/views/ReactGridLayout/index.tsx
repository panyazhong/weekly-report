import { Layout, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ReactGridLayout = () => {
  const layoutChange = async (layout: Layout[]) => {
    console.log(layout);
    try {
      // const res = await insertData(DSType.ComponentDb, layout);
      // console.log("res", res);
    } catch (error) {}
  };
  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      onLayoutChange={layoutChange}
    >
      <div key="1">1</div>
      <div key="2" data-grid={{ x: 4, y: 0, w: 3, h: 3 }}>
        2
      </div>
      <div key="3" data-grid={{ x: 0, y: 3, w: 7, h: 1 }}>
        3
      </div>
    </ResponsiveGridLayout>
  );
};

export default ReactGridLayout;
