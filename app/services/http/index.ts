import {startServer, registerRoutes} from '@orion-js/http'
import components from 'app/components/http'

const routes = {
  ...components
}

registerRoutes(routes)
startServer()
