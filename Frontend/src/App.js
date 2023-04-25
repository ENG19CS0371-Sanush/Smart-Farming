import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Slider from "./components/slider";
import Footer from './components/footer';
import { Route, Switch } from "react-router-dom";
import Schemes from "./components/schemes";
import Loan from "./components/loans";
import Category from "./components/types";
import Farmer from './components/farmers';
import Map from './components/map.jsx';
// import Login from "./components/forms/login";
import Register from "./components/forms/register";
import Predict from "./components/forms/predict";
import FPredict from './components/forms/predict1';
import ImagePredict from './components/Img_predict';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <ToastContainer />
                    <Switch>
                        <Route path="/" component={Slider} exact={true} />
                        <Route path="/schemes" component={Schemes} exact={true} />
                        <Route path="/loans" component={Loan} exact={true} />
                        <Route path="/types" component={Category} exact={true} />
                        <Route path="/farmers" component={Farmer} exact={true} />
                        {/* <Route path="/login" component={Login} exact={true}/> */}
                        <Route path="/register" component={Register} exact={true} />
                        <Route path="/predict" component={Predict} exact={true} />
                        <Route path="/fpredict" component={FPredict} exact={true} />
                        <Route path="/disease-predict" component={ImagePredict} exact={true} />
                        <Route path="/map" component={Map} exact={true} />

                    </Switch>
                </div>
                <div style={{ marginTop: "50px" }}>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;