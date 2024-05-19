import { h } from 'preact';
import register from 'preact-custom-element';

function Greeting({ name = 'World' }) {
    return <p>Hello, {name}!</p>;
} 

register(Greeting, 'x-greeting', ['name']);
