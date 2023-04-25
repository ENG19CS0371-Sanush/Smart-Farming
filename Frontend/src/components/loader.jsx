import React, { Component } from 'react';


export const Spinner = () => {
    return ( 
        <div className="d-flex justify-content-center">
           <div className="spinner-grow text-danger m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info m-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success m-2" role="status">
                <span class="sr-only">Loading...</span>
            </div>
          </div>
     );
}
 
export const Loader = () => {
    return ( 
        <div className="d-flex justify-content-left">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        </div>
     );
}
 
// export default Loader;
