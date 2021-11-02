import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateProjectForm () {

const history = useHistory();
const [projectInfo, setProjectInfo] = useState({
    projectTitle: '',
    projectDescription: '',
    projectGoal:'',
    projectImage:'',
    projectIsOpen:'',
});

const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => {
        return {
        ...prevProject,
        [id]: value,
    };
    });
};

const postData = async () => {
    console.log('Im posting a project to your API');
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`,
        {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectInfo),
    }
    );
    return response.json();
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
        postData().then((response) => {
            console.log("response from API --------", response)
            //window.localStorage.setItem('token', response.token);
            //history.push('/');
        });
    }
};

return (
    <form>
    <div>
        <label htmlFor='projectName'>Project Title:</label>
        <input
        type='text'
        id='projectTitle'
        placeholder='Enter project name'
          // onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='projectDescription'>Project Description:</label>
        <input
        type='text'
        id='projectDescription'
        placeholder='Description'
          // onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='projectGoal'>Project Goal:</label>
        <input
        type='text'
        id='projectGoal'
        placeholder='Goal'
          // onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='projectImage'>Project Image:</label>
        <input
        type='text'
        id='projectImage'
        placeholder='Image'
          // onChange={handleChange}
        />
    </div>
    <div>
        <label htmlFor='projectIsOpen'>Project Is Open?</label>
        <input
        type='text'
        id='projectIsOpen'
        placeholder='IsOpen'
          // onChange={handleChange}
        />
    </div>
    <button type='submit'>Submit New Project</button>
    </form>
);
};
export default CreateProjectForm;