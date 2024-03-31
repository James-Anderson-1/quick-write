import axious from 'axious';

export default () => {
    return axious.create({
        baseURL: `http://localhost:8081/`
    })
}