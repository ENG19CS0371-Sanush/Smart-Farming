import React ,{Component} from 'react';
import FPform from './common/predict_form1';
import Joi from 'joi-browser';
import {predict_fertilizer} from '../services/recordService.js';
import axios from 'axios';
import {Loader} from '../loader';

class FPredict extends FPform{
    state={
        data:{
                nitrogen: "",
                phosphorus: "",
                potassium: "",
                temperature: "",
                humidity: "",
                moisture: "",
                crop_type: "",
        },
        result:[],
        errors:{},
        loading:false
    };


schema = {
    nitrogen: Joi.number().greater(0).less(141).required().label("Nitrogen"),
    phosphorus: Joi.number()
      .greater(5)
      .less(146)
      .required()
      .label("Phosphorous"),
    potassium: Joi.number().greater(5).less(206).required().label("Potassium"),
    temperature: Joi.number()
      .greater(8)
      .less(43)
      .required()
      .label("Temperature"),
    humidity: Joi.number().greater(14).less(100).required().label("Humidity"),
    moisture:Joi.number().greater(10).less(100).required().label("Moisture"),
    crop_type:Joi.string().required().min(2).max(12).label("Crop_type")
};

doSubmit = async() => {
    const {data} = this.state;
    this.setState({loading:true});
    try{
        const result = await predict_fertilizer(data);
        this.setState({result:result.data});
        // console.log(result.data);
        this.setState({loading:false});
    }
    catch(ex){
        console.log(ex.message);
    }
};

render() {
    return (
      <div style={{ marginTop: "80px", marginLeft: "30px" }}>
        <div className="container">
          <div>
            <h4 style={{ fontFamily: "italic" }}>
              Predict The Best Suitable Fertilizer To Your Area
            </h4>
          </div>
          <div className="my-4">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                {this.renderInput("nitrogen", "Nitrogen")}

                {this.renderInput("phosphorus", " Phosphorous")}

                {this.renderInput("potassium", "Potassium")}

                {this.renderInput("temperature", "Temperature")}

                {this.renderInput("humidity", "Humidity")}

                {this.renderInput("moisture", "Moisture")}

                {this.renderSelect("crop_type", "Crop_type")}

                <div className="col-sm" style={{ marginTop: "20px" }}>
                  <span></span>
                  <button
                    className="btn btn-primary "
                    disabled={this.validate()}
                    style={{ width: "100px", marginTop: "10px" }}
                  >
                    PREDICT
                  </button>
                </div>
              </div>
            </form>

            <div className="row my-5">
              <div className="col">
                  {this.state.loading ? (<div className="text-center"> <Loader/> </div>):(
                  <h5 style={{ fontFamily: "italic" }}>
                    RESULTANT FERTILIZER:
                  <span
                    className="badge badge-warning m-1 p-2"
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "italic",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.result.fertilizer}
                  </span>
                  </h5>)
                  }
          
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FPredict;
