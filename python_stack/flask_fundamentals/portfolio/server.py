from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

@app.route('/myportfolio')
def myPortfolio():
    return render_template('myPortfolio.html')

@app.route('/awebpage')
def myWebPage():
    return render_template('aWebPage.html')

@app.route('/aboutme')
def aboutMe():
    return render_template('aboutMe.html')
app.run(debug=True)