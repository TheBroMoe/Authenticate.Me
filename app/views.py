from app import app

@app.route('/')
def home():
    return "<b>There has been a change</b>"

@app.route('/certificateRequest', methods= {'GET', 'POST', 'DELETE'})
def handle_certificate_requests():
    if (request.method == 'GET'):
        # get all requests (add filter if got time)
        pass
    else if (request.method == 'POST'):
        # add a new request, should generate an id for it
        pass
    else if (request.method == 'DELETE'):
        # delete all requests in db
        pass

@app.route('/certificateRequest/<int:num>', methods= {'GET', 'DELETE'})
def handle_certificate_requests_by_id():
    if (request.method == 'GET'):
        # get a request by id for detailed view
        pass
    else if (request.method == 'DELETE'):
        # delete a request by id
        pass

