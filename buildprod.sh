ssh -i id_rsa_scs scslin@40.71.213.26

cd build

./build.sh (enter github user)

kill -9 tmux

cd $HOME/build/SCS/scs-express-app

npm start

cd $HOME/myProject

npm start
