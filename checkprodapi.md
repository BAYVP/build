strapi admin screen :

http://scsapi.shreemaycommunity.org/admin

events api url :

https://scsapi.shreemaycommunity.org/events

config.js :

 production: {
        db: {
         
          host: getDbHostname(),
          port: getDbPort(),
          strapiServerUrl:""
        },
        strapi: {
          hostUrl:"https://scsapi.shreemaycommunity.org",
          port:"443"
        }
    },
    
 nginx :
 
 
 server_name shreemaycommunity.org;
 
 server_name scsapi.shreemaycommunity.org; 

    
    
    
