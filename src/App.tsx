import ErrorBoundary from './components/ErrorBoundary'
import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()

  return <ErrorBoundary>{routeElements}</ErrorBoundary>
}

export default App
