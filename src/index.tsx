import { h, render } from 'preact';
import App from './tsx/App';
import "ress";
import "./scss/style.scss";

const $root = document.getElementById('root') as HTMLElement;

render(<App />, $root);
