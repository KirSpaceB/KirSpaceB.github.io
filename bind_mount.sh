docker run -d \
-it \ 
--name builder \ 
--mount type=bind,source="/distFolder",target=/app/frontend/dist \ 
kirkflores/kiby.io:latest