from flask import *
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv
import os

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def get_index():
    return jsonify({"Hello" : "World"})

if __name__ == "__main__":
    app.run(debug=True)