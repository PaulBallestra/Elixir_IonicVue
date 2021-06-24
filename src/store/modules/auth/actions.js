import axios from 'axios'


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
