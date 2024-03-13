const LoginPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h4 className="text-center mb-3">Welcome to SMS!</h4>
                        <form method="POST" action="">
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;