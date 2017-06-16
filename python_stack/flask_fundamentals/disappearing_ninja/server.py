from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def default():
    return render_template('turtles.html')

@app.route('/ninja')
def display_ninjas():
    return render_template('static.html')

@app.route('/ninja/blue')
def display_leo():
    return render_template('leonardo.html')

@app.route('/ninja/orange')
def display_mike():
    return render_template('michaelangelo.html')

@app.route('/ninja/red')
def display_raph():
    return render_template('raphael.html')

@app.route('/ninja/purple')
def display_don():
    return render_template('donatello.html')






app.run(debug=True)