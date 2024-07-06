
    import React from 'react';
    import { useAuth0 } from '@auth0/auth0-react';

    const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
        <h1>Bienvenido a la Biblioteca</h1>
        <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
        </div>
    );
    };

    export default Login;