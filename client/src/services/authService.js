// Services are to help us connect to server side
// Contains fetch requests (controller functions) to our end points
// We dont want to store everything within the component

export const login = (user) => {
  return fetch('/auth/login', {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'Application/json',
    },
  }).then((res) => {
    if (res.status !== 401 && res.status === 200)
      // Passport responds 401 status if not authenticated and 200 if authenticated
      return res.json().then((data) => data);
    // Authenticated
    else
      return {
        isAuthenticated: false,
        user: { username: '', role: '', _id: '' },
      };
  });
};

export const register = (user) => {
  return fetch('/auth/register', {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'Application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const logout = () => {
  return fetch('/auth/logout')
    .then((res) => res.json())
    .then((data) => data);
};

export const isAuthenticated = () => {
  return fetch('/auth/authenticated').then((res) => {
    if (res.status !== 401)
      // Passport responds 401 status if not authenticated
      return res.json().then((data) => data);
    // Authenticated
    else return { isAuthenticated: false, user: { username: '', role: '' } };
  });
};
