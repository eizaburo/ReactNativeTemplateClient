export const updateUserData = user => (
    {
        type: 'UPDATE_USER_DATA',
        id: user.id,
        name: user.name,
        email: user.email,
        access_token: user.access_token,
    }
);