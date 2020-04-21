import os
from flask import Flask
from flask_cors import CORS


# new
def create_app(script_info=None):

    # instantiate the app
    app = Flask(__name__)

    cors = CORS(app, resources={r"/*": {"origins": "*"}})

    # set config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    # register blueprints
    from project.api.ping import ping_blueprint
    app.register_blueprint(ping_blueprint)

    from project.api.predict import predict_blueprint
    app.register_blueprint(predict_blueprint)

    # shell context for flask cli
    @app.shell_context_processor
    def ctx():
        return {'app': app}

    return app


# instantiate the app
# app = Flask(__name__)
# cors = CORS(app, resources={r"/*": {"origins": "*"}})

# api = Api(app)

# app.config.from_object('project.config.DevelopmentConfig')

# h1 = joblib.load('./project/models/model.pkl')
# tfidf = joblib.load('./project/models/vectorizer.pkl')

# class Predict(Resource):
#     def get(self):
#         return {'status': 'success', 'message': 'predict!'}

#     def post(self):
#         post_data = request.get_json(force=True)
#         # story = post_data.get('data')
#         story_vector = tfidf.transform([post_data['data']])
#         prediction = h1.predict(story_vector)
#         response_object = {}
#         response_object['prediction'] = f'Score {prediction[0]}'
#         return response_object, 200

# api.add_resource(Ping, '/ping')
# api.add_resource(Predict, '/predict')