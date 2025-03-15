import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('userinfo');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('userinfo', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userinfo');
    };
    const toggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, toggleSidebar, isSidebarOpen }}>
            {children}
        </AuthContext.Provider>
    );
};
