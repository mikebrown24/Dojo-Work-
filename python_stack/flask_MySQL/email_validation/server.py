from flask import Flask, request, redirect, render_template, session, flash
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

mysql = MySQLConnector(app, 'emaildb')


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
@app.route('/')
def index():
    return render_template('email.html')


@app.route('/success')
def success():
    return render_template('success.html')
    flash("The email address you've entered {} is a VALID address! Thank you!".format(request.form['email']))


@app.route('/process', methods= ['POST'])
def process():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        flash("Success!")
        #print mysql.query_db("SELECT * FROM users")
        query = "SELECT * FROM users"
        users = mysql.query_db(query)
        return redirect('/success')

        
        





app.run(debug=True)