
import React from 'react';
import { useState } from 'react';


export default function Upload(){
    const [fileInputState, setFileInputState]=useState('')
    const [previewSource, setPreviewSource]=useState()
    const [selectedFile, setSelectedFile]=useState('')
    const handleFileInputChange=(e)=>{
        const file=e.target.files[0];
        previewFile(file);
    }
    const previewFile=(file)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile=(e)=>{
        e.preventDefault();
        if(!previewSource) return;
       uploadImage(previewSource)

    };

    const uploadImage=async (base64EncodedImage)=>{
        console.log(base64EncodedImage)
        try{
                await fetch('https://automartbackend.herokuapp.com/api/car/addcar',{mode: 'cors'},{
                    method:'POST',
                    
                    body: JSON.stringify({data:base64EncodedImage}),
                    headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    }

                })
        }catch(error){
            console.log(error)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmitFile}>
                <input type="file" name="" onChange={handleFileInputChange} value={fileInputState} className="form-input"/>
                <button className='btn' type='submit'>Submit</button>
            </form>
            {
                previewSource && (
                    <img src={previewSource} alt="chosse" style={{width:'200px'}}/>
                )
            }
        </div>
    );
}

/* export default Upload; */
