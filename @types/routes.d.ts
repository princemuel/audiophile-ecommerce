interface ILinks {
  routes: IRoute[];
  social: ISocial[];
}

interface IRoute {
  id: string;
  text: string;
  url: __next_route_internal_types__.DynamicRoutes<string>;
  image: string;
}
interface ISocial {
  id: string;
  alt: string;
  icon: IconRFCType;
  url: string;
}

type IconRFCType = (props: IconProps) => React.JSX.Element;
