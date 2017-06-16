from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('names.html')

@app.route('/process', methods=['POST'])
def user_form():
    first_last = request.form['first_last']
    print request.form
    return redirect('/')
app.run(debug=True)