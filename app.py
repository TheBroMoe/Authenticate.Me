from flask import Flask, jsonify, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hey, we have Flask in a Docker container!"

@app.route('/certificateRequest', methods={'GET', 'POST', 'DELETE'})
def handle_certificate_requests():
    if(request.method == 'GET'):
        # get all requests (add filter if got time)
        return "Get Certificate request"
    elif(request.method == 'POST'):
        # add a new request, should generate an id for it
        return "Post Certificate request"
    elif(request.method == 'DELETE'):
        # delete all requests
        return "Delete all requests"

@app.route('/management/<int:num>/<string:mode>', methods= {'GET'})
def handle_connection(num, mode):
    if (mode == 'connect'):
        return "Send connection request"
    elif (mode == 'give'):
        return "Send Credential"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
