import React from 'react'
import ReactDOM from 'react-dom'

const appContainer = document.getElementById('app-container')
const firstElement = <h1>Welcome to <%= appname %></h1>
ReactDOM.render(firstElement, appContainer)
