import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  const login = () => {
    //to do
    setCurrentUser({
      id: 1,
      name: 'Sean Jee',
      profilePic:
        'https://firebasestorage.googleapis.com/v0/b/socialmedia-thechats-mysql.appspot.com/o/alex-lvrs-mwINQsW2KJs-unsplash.jpg?alt=media&token=616b3931-0325-436e-b59f-cd0133971e7c',
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ user: currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
