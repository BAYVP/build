ssh -i id_rsa_scs scslin@40.71.213.26

cd build

./build.sh (enter github user)

kill -9 tmux

# web app
cd $HOME/build/SCS/scs-express-app

npm start

#strapi
cd $HOME/myProject

npm start

#events check
curl https://scsapi.shreemaycommunity.org/events

