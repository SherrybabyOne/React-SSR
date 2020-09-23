import { matchPath } from 'react-router';

export default (path, routeList) => {
  let route;
  for (var item of routeList) {
    if (matchPath(path,item)){
      route = item;
      break;
    }
  }
  return route;
}
