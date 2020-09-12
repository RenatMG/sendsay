import React from 'react';

const AuthFormGitLink = ({setGitLink}) => {
    return (
        <div className='auth-git-link' onClick={() => setGitLink(prev => !prev)}>
            @link-to-your-github
        </div>
    );
};

export default AuthFormGitLink;