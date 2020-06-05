
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import sqlite3
from sqlalchemy import create_engine
import pandas as pd


app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

rds_connection_string = "postgres:2290@localhost:5432/PIDX_Codes_db"
engine = create_engine(f'postgresql://{rds_connection_string}')

print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/books/all')

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

# Route to render index.html template using data from Mongo
@app.route("/")
def index():

    # Return template and data
    return render_template("index.html")
@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():

    result = engine.execute("select code,product_definition,description,cetane_octane,oxygenated_rbob_type,oxygenate_percent,comments,requester,date_code_assigned from product_codes")  
    return jsonify({'result': [dict(row) for row in result]})

    print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/books/all')
@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

if __name__ == "__main__":
    app.run(debug=True)