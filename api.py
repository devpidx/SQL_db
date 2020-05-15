import flask
from flask import request, jsonify
import sqlite3

app = flask.Flask(__name__)
app.config["DEBUG"] = True

print('SAMPLE CALL: http://127.0.0.1:5000/api/v1/resources/books?author=Connie+Willis&id=24')

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''

@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
#    conn = sqlite3.connect('books.db')
    conn = sqlite3.connect('prodcodes.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute('SELECT * FROM prodcodes;').fetchall()
    return jsonify(all_books)

@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404</h1><p>The resource could not be found.</p>", 404

@app.route('/api/v1/resources/books', methods=['GET'])
def api_filter():
    query_parameters = request.args
    print(query_parameters)
    code = query_parameters.get('code')
    published = query_parameters.get('published')
    author = query_parameters.get('author')
    
    query = "SELECT * FROM prodcodes WHERE"
    to_filter = []
    
    if code:
        query += ' code=? AND'
        to_filter.append(code)
    if published:
        query += ' published=? AND'
        to_filter.append(published)
    if author:
        query += ' author=? AND'
        to_filter.append(author)
    if not (id or published or author):
        return page_not_found(404)
    
    query = query[:-4] + ';'
    
    conn = sqlite3.connect('prodcodes.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    
    results = cur.execute(query, to_filter).fetchall()
    return jsonify(results)

app.run()