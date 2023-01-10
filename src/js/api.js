// form without reboot
const ERROR_MESSAGE = 'Не удалось загрузить message';
const POST_URL = 'https://echo.htmlacademy.ru/';

export const sendData = (onSuccess, onFail, body, onFinally) => {
    fetch(POST_URL, {
        method: 'POST',
        body,
    })
        .then((response) => {
            if (response.ok) {
                onSuccess();
            } else {
                onFail();
            }
        })
        .catch(onFail)
        .finally(onFinally);
};
