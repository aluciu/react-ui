import React, {Component} from 'react';
import Sidebar from 'components/Sidebar';
import Post from 'components/Post/Post';
import _map from 'lodash/map';
import _slice from 'lodash/slice';

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

class App extends Component {
  // _slice(posts, 0, 2)
	render() {
		return (
			<div className={layout.container}>
        <div className={layout.columns2}>

          {_map(_slice(posts, 0, 2), (item) => {
            return (
              <Post
                key={item.id}
                {...item}
              />
            );
          })}


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

        <div className={layout.columns2}>
          <Sidebar/>
        </div>
			</div>
		);
	}
}

export default App;
