import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1>\
        <p>This site is a prototype API for distant reading of science fiction novels.</p>"

# A route to return all of the available entries in our catalog.
@app.route('/api/v1/resources/books/all', methods=['GET', 'POST', 'PUSH'])
def api_all():
    conn = sqlite3.connect('product_codes.db)
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_product_codes = cur.execute('SELECT * FROM product_codes;').fetchall()

    return jsonify(all_product_codes)

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/api/v1/resources/books', methods=['GET'])
def api_filter():
    query_parameters = request.args

    code = query_parameters.get('code')
    product_definition = query_parameters.get('product_definition')
    description = query_parameters.get('description')

    query = "SELECT * FROM books WHERE"
    to_filter = []

    if code:
        query += ' code=? AND'
        to_filter.append(code)
    if product_definition:
        query += ' product_definition=? AND'
        to_filter.append(product_definition)
    if description:
        query += ' description=? AND'
        to_filter.append(description)
    if not (code or product_definition or description):
        return page_not_found(404)

    query = query[:-4] + ';'

    conn = sqlite3.connect('product_codes.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()

    results = cur.execute(query, to_filter).fetchall()

    return jsonify(results)

app.run()