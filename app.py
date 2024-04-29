from flask import Flask, render_template, request
import subprocess

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    code_content = request.form.get('code', '')
    prev_code = request.form.get('prev_code', '')

    if request.method == 'POST':
        result = execute_python_code(code_content)
        return render_template('index.html', code=code_content, output=result)
    else:
        return render_template('index.html', code=prev_code)

def execute_python_code(code):
    # Execute Python code using subprocess
    try:
        result = subprocess.run(['python', '-c', code], capture_output=True, text=True)
        return result.stdout
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
