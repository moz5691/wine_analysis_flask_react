from flask import Blueprint, request
from flask_restx import Resource, Api
import joblib

predict_blueprint = Blueprint('predict', __name__)
api = Api(predict_blueprint)

h1 = joblib.load('./project/models/model.pkl')
tfidf = joblib.load('./project/models/vectorizer.pkl')


class Predict(Resource):
    def get(self):
        return {'status': 'success', 'message': 'predict!'}

    def post(self):
        post_data = request.get_json(force=True)
        # story = post_data.get('data')
        story_vector = tfidf.transform([post_data['data']])
        prediction = h1.predict(story_vector)
        response_object = {}
        response_object['prediction'] = f'Score {prediction[0]}'
        return response_object, 200


api.add_resource(Predict, '/predict')
