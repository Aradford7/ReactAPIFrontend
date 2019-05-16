import { withRouter } from 'react-router-dom';    
const ComponentToHide = (props) => {
  const { location } = props;
  if (location.pathname.match(/routeOnWhichToHideIt/)){
    return null;
  }

  return (
    <ComponentToHideContent/>
  )
}

const ComponentThatHides = withRouter(ComponentToHide);