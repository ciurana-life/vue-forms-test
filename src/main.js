import { createApp } from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Require all components under Froms folder that start
// with "Base" string
const requireComponent = require.context(
  './components/Forms',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

// Create app
const app = createApp(App)

// Make the "Base" components global so that we don't 
// have to manually import them
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')