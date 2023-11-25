import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const posts = [
    {id: 1, message: "Текст поста номер 1", likesCount: "5",},
    {id: 2, message: "Текст поста номер 2", likesCount: "11",},
] // Посты

const dialogs = [
    {id: 1, name: "Даниил",},
    {id: 2, name: "Тимоха",},
    {id: 3, name: "Дэн",},
    {id: 4, name: "Сергеев",},
    {id: 5, name: "Стас",},
    {id: 6, name: "Беспупкин",}
] // Диалоги
const messages = [
    {id: 1, message: "Сиськи жопа"},
    {id: 2, message: "Бебра бебра еее"},
    {id: 2, message: "Бебра бебра попочки"},
    {id: 2, message: "Бебра бебра попочки"},
    {id: 2, message: "Бебра бебра попочки"},
    {id: 2, message: "Бебра бебра попочки"},
] // Сообщения

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);