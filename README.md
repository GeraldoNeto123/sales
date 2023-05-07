docker-compose up --build -d

docker exec -it front_react sh
yarn && yarn dev

docker exec -it api_node sh
yarn && yarn dev