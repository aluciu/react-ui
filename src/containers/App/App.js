import React, {Component} from 'react';
import _map from 'lodash/map';
import _slice from 'lodash/slice';

import Sidebar from 'components/Sidebar';
import Post from 'components/Post/Post';
import Slider from 'components/Slider/Slider';

import layout from 'css/layout.css';
import './App.css';

const posts = [
  {
    id: 1,
    title: 'Post One',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '16-03-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=1',
    imagePosition: 'left',
  },
  {
    id: 2,
    title: 'Post Two',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '01-06-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=2',
    imagePosition: 'right',
  },
  {
    id: 3,
    title: 'Post Tree',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '22-12-2016',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=3',
    imagePosition: 'bottom',
  },
  {
    id: 4,
    title: 'Post Four',
    excerpt: 'An engraving by Claes Visscher showing Old London Bridge in 1616',
    date: '12-06-2015',
    image: 'https://placem.at/things?w=300&h=300&txt=0&random=4',
    imagePosition: 'top',
  },
];

const slides = [
  {
    id: 1,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=1',
    title: 'Need UI kit?',
  },
  {
    id: 2,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=2',
    title: 'Anoter Image with Title',
  },
  {
    id: 3,
    image: 'https://placem.at/things?w=1140&h=500&txt=0&random=3',
    title: '',
  },
];

class App extends Component {
	render() {
		return (
			<div className={layout.container}>

        <div className={layout.row}>
          <Slider slides={slides} />
        </div>

        <div className={layout.row}>
          <div className={layout.columns2}>
            {_map(_slice(posts, 0, 2), (item) => {
              return (
                <Post
                  key={item.id}
                  {...item}
                />
              );
            })}

            <div className={layout.row}>
              {_map(_slice(posts, 2), (item) => {
                return (
                  <div className={layout.columns2} key={item.id}>
                    <Post
                      {...item}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={layout.columns2}>
            <Sidebar/>
          </div>
        </div>
			</div>
		);
	}
}

export default App;
