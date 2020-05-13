

export const checkAndReturnToken = (history) => {
    const token = localStorage.getItem('token');

    if (token === null || token === undefined) {
        if (history) {
            history.push('/login');
            return null;
        }
    }
    const parsedToken = JSON.parse(token);

    const date = new Date();
    if ( parsedToken.expiration < date.getTime() ) {
        if (history) {
            history.push('/login');
            return null;
        }
    }

    return parsedToken.token;
};