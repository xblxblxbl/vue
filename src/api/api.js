import axios from 'axios';
const login = (username, password) => {
    const data = {
        username: username,
        password: password
    };
    axios.post('/login', data)
        .then(response => {
            // 登录成功的处理逻辑
            console.log('登录成功');
        })
        .catch(error => {
            // 登录失败的处理逻辑
            console.error('登录失败', error);
        });
};
export {
    login,
}

