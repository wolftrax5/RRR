// const BASE_PATH = 'api'
// TO START THE APP run REACT_APP_ENV='development' npm start or the environmend did you prefear
import * as environment from './environment'

const {REACT_APP_ENV, NODE_ENV} = process.env

const envs = environment(REACT_APP_ENV || 'development')

export const getBasePath = () => `${envs.BASE_PATH}`

export const getNode_ENV = () => `${NODE_ENV}`
