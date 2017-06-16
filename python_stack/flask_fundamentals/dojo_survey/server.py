from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route('/')
def survey():
    return render_template('survey.html')
    

@app.route('/result', methods=['POST'])
def submitted():

    return render_template('results.html')
    session['name'] = request.form['name']
    session['Locations'] = request.form['Locations']
    session['Languages'] = request.form['Languages']
    session['comment'] = request.form['comment']
    return redirect('/')
app.run(debug=True)