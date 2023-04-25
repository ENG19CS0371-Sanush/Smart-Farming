import React , {Component} from 'react';
import { useState } from 'react';
// import { disease_predict } from './services/recordService';
import axios from 'axios';
import { Loader } from './loader';

function ImagePredict(){

    const [file,setFile] = useState(null);
    const [disease,setDisease] = useState(null);
    const [treatment,setTreatment] = useState(null);
    const [loading,setLoading] = useState(false);

    function handleFile(e){
        setFile(e.target.files[0]);
    }

    async function handleSubmit(){
        const formdata = new FormData();
        formdata.append('file',file);
        try{
           setLoading(true); 
           const result = await axios.post('http://localhost:5000/disease-predict',formdata);
           const response = result.data;
           setDisease(response.Result);
           setTreatment(response.Treatment);
           setLoading(false);
        }
        catch(ex){
            console.log(ex);
        }
    }

    

    return(

        <div>
            <div style={{marginTop:'100px',marginLeft:"90px"}}>
                <div className="container">
                    
                    <div className="row"><h4 style={{fontFamily:"italic"}}>Predict the Leaf disease from image</h4></div>
                    <div className="row">
                    <div className="col my-3">
                        <div className="row my-3">
                            <input type="file" name="file" onChange={handleFile}/>
                        </div>
                        <div className="row my-5">
                            <button className='btn btn-primary btn-md' onClick={handleSubmit} disabled = {!file}>Submit</button>
                        </div>
                        <div className="row my-3">
                            <h5 style={{fontFamily:"italic"}}>The Predicted Disease And Treatment are:</h5>
                            { loading? (<div className="text-center mx-2"><Loader/></div>):(
                                <div className="row mx-2">
                                <div className='col'>
                                    <span className="badge badge-warning m-1 p-2" style={{
                                        textTransform: "uppercase",
                                        fontFamily: "italic",
                                        fontWeight: "bolder",
                                    }}>{disease}</span>
                                </div>
                                <div className='col'>
                                    <span className="badge badge-warning m-1 p-2" style={{
                                        textTransform: "uppercase",
                                        fontFamily: "italic",
                                        fontWeight: "bolder",
                                    }}>{treatment}</span>
                                </div>
                            </div>
                            )} 
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div> 
    )
}
 
export default ImagePredict;


