### Flask Backend

#### Test at localhost

```sh
$ docker-compose up -d --build
```

#### Heroku Deploy Docker instruction

```sh
$ heroku create
Creating app... done, ⬢ thawing-savannah-60405
https://<app_name>.herokuapp.com/ | https://git.heroku.com/<app_name>.git

$ heroku container:login

$ docker build -f Dockerfile.prod -t registry.heroku.com/<app_name>/web .

$ docker run --name flask-aws -e "PORT=8765" -p 5002:8765 registry.heroku.com/<app_name>/web:latest

$ docker push registry.heroku.com/<app_name>/web:latest

$ heroku container:release -a <app_name> web
```

#### Note: Do not use Alpine for docker build. Scikit-learn (joblib dependencies) will not work with Alpine.

### React Frontend

```sh
$ cd frontend
$ npm start

```
