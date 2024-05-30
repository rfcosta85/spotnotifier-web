import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({token}) => {
    let navigate = useNavigate();

    /**
 * handleLogout - Função para lidar com o logout do usuário.
 *
 * @returns {void} - Esta função não retorna um valor. Ela remove o token de autenticação do sessionStorage e redireciona o usuário para a página inicial.
 *
 * A função handleLogout é usada para desconectar o usuário da aplicação. 
 * Ela remove o token de autenticação armazenado no sessionStorage, que é utilizado para manter a sessão do usuário.
 * Após a remoção do token, a função redireciona o usuário para a página inicial da aplicação.
 */
    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }
    return (
        <div>
            <h3>Bem vindo de volta, {token.user.user_metadata.name}</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Homepage