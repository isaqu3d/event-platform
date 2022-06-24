import { ApolloProvider } from '@apollo/client'
import { Router } from './components/router/Router'
import { client } from './lib/apollo'
import { Event } from './pages/Event'

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  )
}

export default App
