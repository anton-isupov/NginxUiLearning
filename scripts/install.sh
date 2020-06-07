
echo "Build project..."
ng build --prod
echo "Build Success!"

echo "Copy files to remote server"
scp -r -i C:/Users/tonyi/Projects/AWS/aws-key.pem ../dist ubuntu@3.135.224.42:/tmp/lib
echo "Files copied success"

echo "Bye"
