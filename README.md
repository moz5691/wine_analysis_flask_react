docker build -f Dockerfile.prod -t registry.heroku.com/sheltered-headland-83049/web .

docker run --name flask-aws -e "PORT=8765" -p 5002:8765 registry.heroku.com/sheltered-headland-83049/web:latest

docker push registry.heroku.com/sheltered-headland-83049/web:latest

heroku container:release -a sheltered-headland-83049 web

url https://sheltered-headland-83049.herokuapp.com/predict
