import flask
from flask import request, jsonify, render_template
from flask_cors import CORS
import sqlite3
from sqlalchemy import create_engine
import pandas as pd


app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

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

# @app.route('/', methods=['GET'])
# def home():
#     return '''<h1>Distant Reading Archive</h1>
# <p>A prototype API for distant reading of science fiction novels.</p>'''

@app.route('/api/v1/resources/books/all', methods=['GET'])


def api_all():

    rds_connection_string = "postgres:2290@localhost:5432/PIDX_Codes_db"
    engine = create_engine(f'postgresql://{rds_connection_string}')
    aa = engine.execute("select * from product_codes")  
    return jsonify({'result': [dict(row) for row in aa]})

    print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/books/all')

    # conn.row_factory = dict_factory
    # cur = conn.cursor()
    # all_books = cur.execute('SELECT * FROM prodcodes;').fetchall()

    # all_books = pd.read_sql_query('select * from product_codes', con=engine)


    # return jsonify(all_books)

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

# @app.route('/api/v1/resources/books', methods=['GET'])
# def api_filter():
#     query_parameters = request.args
#     print(query_parameters)
#     code = query_parameters.get('code')
#     published = query_parameters.get('published')
#     author = query_parameters.get('author')
    
#     query = "SELECT * FROM prodcodes WHERE"
#     to_filter = []
    
#     if code:
#         query += ' code=? AND'
#         to_filter.append(code)
#     if published:
#         query += ' published=? AND'
#         to_filter.append(published)
#     if author:
#         query += ' author=? AND'
#         to_filter.append(author)
#     if not (id or published or author):
#         return page_not_found(404)
    
#     query = query[:-4] + ';'
    
#     conn = sqlite3.connect('prodcodes.db')
#     conn.row_factory = dict_factory
#     cur = conn.cursor()
    
#     results = cur.execute(query, to_filter).fetchall()
#     return jsonify(results)

app.run()