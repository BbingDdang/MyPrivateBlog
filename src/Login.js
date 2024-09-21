import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/user';

function Login(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({name: "BbingDdang", age: 27, email: "bbingddang@gmail.com"}))
                }}>Login</button>        
        </div>
    );
}

export default Login;