sudo rm -r SCS
git clone https://github.com/BAYVP/SCS.git
cd $HOME/build/SCS/scs-express-app
npm install
npm run build
cd build
zip build.zip -r *
cd $HOME/myProject/public
zip public.zip -r *
sudo rm -r static
sudo cp $HOME/build/SCS/scs-express-app/build/*.zip .
sudo unzip build.zip
sudo rm build.zip
cd $HOME/myProject/public
