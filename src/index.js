import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const About = () => {
  return <p><t />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut arcu urna. Suspendisse gravida felis non odio efficitur rhoncus. Etiam varius, erat a elementum sagittis, sem tellus fermentum mauris, in ultricies dolor nulla quis enim. Sed ac est sed felis suscipit consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis, nisl vel porta rhoncus, nibh mi aliquam elit, at scelerisque justo felis at urna. In suscipit posuere nulla, eu tristique tellus bibendum id. <br /> <br /> <t />Curabitur pretium, enim eget posuere malesuada, lorem nunc scelerisque massa, in tincidunt ipsum ex sit amet turpis. Pellentesque id molestie odio, ut bibendum lorem. Maecenas dictum libero id nibh congue dapibus. Aliquam quis consectetur dui. Aliquam nec fringilla magna. Morbi in laoreet eros. Mauris in fringilla massa, sit amet lobortis odio. Integer et turpis velit. Vivamus eget sem sed sapien accumsan rhoncus.</p>
}

ReactDOM.render(<About />, document.querySelector('.window-content'));
