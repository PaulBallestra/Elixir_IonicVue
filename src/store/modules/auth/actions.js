import axios from 'axios'

//ME
export const me = ({ state }) => {

    const token = state.user.token;

    console.log(token);

    if(!token){
        return;
    }

    axios.post('http://127.0.0.1:8000/api/auth/me', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        console.log(response);
        return response.data
    }).catch((error) => {
        console.log(error);
    });

};

//LOGIN
export const login = ({ commit }, form) => {

    axios.post(
        'http://127.0.0.1:8000/api/auth/login',
        {
            email: form.email,
            password: form.password,
        }
    ).then((response) => {

        console.log(response);

        commit('token', response.data.token);

    }).catch((error) => {
        console.log(error)
    });

};

//LOGOUT
export const logout = ({ commit, state }) => {

    const token = state.user.token;
    if (!token) {
        return;
    }

    axios.post(
        'http://127.0.0.1:8000/api/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error)
    });

    commit('token', null);
    commit('data', {});
};

//REGISTER
export const register = ({ commit }, form) => {

    axios.post(
        'http://127.0.0.1:8000/api/auth/register',
        {
            family_name: form.family_name,
            given_name: form.given_name,
            email: form.email,
            password: form.password,
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token);

        const user = {
            family_name: response.data.family_name,
            given_name: response.data.given_name,
            email: response.data.email,
            created_at: response.data.created_at
        };

        commit('data', user)

    }).catch((error) => {
        console.log(error)
    });

};
