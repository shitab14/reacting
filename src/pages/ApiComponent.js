import React, { useState } from 'react';
import ApiClient from '../api/ApiClient';
import './ApiComponent.css'; // External CSS for styling

const ApiComponent = () => {
    const [getDataOutput, setGetDataOutput] = useState('');
    const [postDataInput, setPostDataInput] = useState('');
    const [postDataOutput, setPostDataOutput] = useState('');
    const [updateDataInput, setUpdateDataInput] = useState('');
    const [updateDataOutput, setUpdateDataOutput] = useState('');
    const [deleteDataInput, setDeleteDataInput] = useState('');
    const [deleteDataOutput, setDeleteDataOutput] = useState('');

    // Handle GET request
    const handleGetData = () => {
        ApiClient.getData()
            .then(response => setGetDataOutput(JSON.stringify(response.data, null, 2)))
            .catch(error => setGetDataOutput('Error: ' + error.message));
    };

    // Handle POST request
    const handlePostData = () => {
        ApiClient.postData({ newData: postDataInput })
            .then(response => setPostDataOutput(JSON.stringify(response.data, null, 2)))
            .catch(error => setPostDataOutput('Error: ' + error.message));
    };

    // Handle PUT request (Update)
    const handleUpdateData = () => {
        ApiClient.updateData({ updatedData: updateDataInput })
            .then(response => setUpdateDataOutput(JSON.stringify(response.data, null, 2)))
            .catch(error => setUpdateDataOutput('Error: ' + error.message));
    };

    // Handle DELETE request
    const handleDeleteData = () => {
        ApiClient.deleteData({ dataId: deleteDataInput })
            .then(response => setDeleteDataOutput(JSON.stringify(response.data, null, 2)))
            .catch(error => setDeleteDataOutput('Error: ' + error.message));
    };

    return (
        <div className="api-container">
            {/* GET */}
            <div className="api-row">
                <button onClick={handleGetData}>GET /v1/api</button>
                <textarea
                    value={getDataOutput}
                    readOnly
                    className="output-area"
                />
            </div>

            {/* POST */}
            <div className="api-row">
                <input
                    type="text"
                    placeholder="Enter data to POST"
                    value={postDataInput}
                    onChange={(e) => setPostDataInput(e.target.value)}
                    className="input-field"
                />
                <button onClick={handlePostData}>POST /v1/api</button>
                <textarea
                    value={postDataOutput}
                    readOnly
                    className="output-area"
                />
            </div>

            {/* PUT (Update) */}
            <div className="api-row">
                <input
                    type="text"
                    placeholder="Enter data to UPDATE"
                    value={updateDataInput}
                    onChange={(e) => setUpdateDataInput(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleUpdateData}>PUT /v1/api</button>
                <textarea
                    value={updateDataOutput}
                    readOnly
                    className="output-area"
                />
            </div>

            {/* DELETE */}
            <div className="api-row">
                <input
                    type="text"
                    placeholder="Enter ID to DELETE"
                    value={deleteDataInput}
                    onChange={(e) => setDeleteDataInput(e.target.value)}
                    className="input-field"
                />
                <button onClick={handleDeleteData}>DELETE /v1/api</button>
                <textarea
                    value={deleteDataOutput}
                    readOnly
                    className="output-area"
                />
            </div>
        </div>
    );
};

export default ApiComponent;