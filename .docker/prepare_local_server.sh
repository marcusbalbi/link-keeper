echo "
  PORT=$PORT
  LINK_ENCRYPT_KEY=$LINK_ENCRYPT_KEY
  MONGO_HOST=$MONGO_HOST 
  MONGO_PORT=$MONGO_PORT 
  MONGO_DATABASE_NAME=$MONGO_DATABASE_NAME" > .env
cat .env
ssh balbi@172.17.0.1 'mkdir -p projetos/deploy/link-keeper/server'
ssh balbi@172.17.0.1 "export PORT=$PORT; LINK_ENCRYPT_KEY=$LINK_ENCRYPT_KEY; MONGO_HOST=$MONGO_HOST; MONGO_PORT=$MONGO_PORT; MONGO_DATABASE_NAME=$MONGO_DATABASE_NAME"
ssh balbi@172.17.0.1 '/usr/bin/docker volume create link_keeper_volume'