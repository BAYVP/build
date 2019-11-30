"use strict"

const DB_PORT = 9003;
const SERVER_PORT = 9000;
const DB_HOSTNAME = 'localhost'; // Default is localhost
// read args
const pe = process.env.NODE_ENV// eslint-disable-line no-process-env

  
function getDbHostname(){
  return DB_HOSTNAME;
}

function getDbPort(){
  return DB_PORT;
}

module.exports = {
  environment: {
    development: {
      db: {
        username : '',
        password: '',
        host: getDbHostname(),
        port: getDbPort(),
      },
      strapi: {
        hostUrl:"https://scsapi.shreemaycommunity.org",
        port:"443"
      }
    },
    test: {
      db: {
        username : '',
        password: '',
        host: getDbHostname(),
        port: getDbPort(),
      },
      strapi: {
        hostUrl:"http://52.191.119.42",
        port:"80"
      }
    },
    production: {
        db: {
          username : '',
          password: '',
          host: getDbHostname(),
          port: getDbPort(),
          strapiServerUrl:""
        },
        strapi: {
          hostUrl:"https://scsapi.shreemaycommunity.org",
          port:"443"
        }
    },
  },
  getProps: function(){
    return this.environment[pe]
  },
  getDbProps: function(){
    return {
      db: {
        port: this.getProps().db.port,
        host: this.getProps().db.host
      }
    }
  },
  getStrapiUrl: function(){
    return this.getProps().strapi.hostUrl + ":" + this.getProps().strapi.port;
  },
  getDbPort: function(){
    return DB_PORT;
  },
  getServerPort: function(){
    return SERVER_PORT;
  },
  setEnv: function(passedEnv){
    env = passedEnv
  }
}
