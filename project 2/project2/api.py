
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

print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/codes/all')
print('===========================================================')
print('SAMPLE CALL: http://127.0.0.1:5000/api/geo/terminals')

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

# Create route to return all books 
@app.route('/api/geo/terminals', methods=['GET'])
def api_geo():

    result = engine.execute("select terminal_id,country,submitter,terminal_owner,latitude,longitude from terminal_countries")  
    return jsonify({'result': [dict(row) for row in result]})

# Route to render index.html template using data from Mongo
@app.route("/")
def index():

    # Return template and data
    return render_template("index.html")

# Create route to return all books 
@app.route('/api/v1/resources/codes/all', methods=['GET'])
def api_all():

    result = engine.execute("select code,product_definition,description,cetane_octane,oxygenated_rbob_type,oxygenate_percent,comments,requester,date_code_assigned from product_codes")  
    return jsonify({'result': [dict(row) for row in result]})

    print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/codes/all')



# # Create route to return specific filters
# @app.route('/api/v1/resources/codes/search/', methods=['GET'])
# def api_filter():
#     query_parameters = request.args
#     print(query_parameters)
#     code = query_parameters.get('code')
#     published = query_parameters.get('published')
#     author = query_parameters.get('author')
    
#     query = "select code,product_definition,description,cetane_octane,oxygenated_rbob_type,oxygenate_percent,comments,requester,date_code_assigned from product_codes"
#     to_filter = []
    
#     if code:
#         query += ' code=? AND'
#         to_filter.append(code)
#     if product_definition:
#         query += ' proddef=? AND'
#         to_filter.append(product_definition)
#     if description:
#         query += ' description=? AND'
#         to_filter.append(description)
#     if cetane_octane:
#         query += ' cetoct=? AND'
#         to_filter.append(description)
#     if not (code or product_definition or description or):
#         return page_not_found(404)
    
#     query = query[:-4] + ';'

#     results = cur.execute(query, to_filter).fetchall()
#     return jsonify(results)


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

if __name__ == "__main__":
    app.run(debug=True)