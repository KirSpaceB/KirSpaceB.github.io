export PORT=3000
docker run \
-p $PORT:$PORT \
-e PORT=$PORT \
--rm \
kirkflores/kiby.io:latest