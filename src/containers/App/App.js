import React, {Component} from 'react';
import _map from 'lodash/map';
import _slice from 'lodash/slice';

import Sidebar from 'components/Sidebar/Sidebar';
import Post from 'components/Post/Post';
import Slider from 'components/Slider/Slider';
import UserCard from 'components/UserCard/UserCard';
import Thumb from 'components/Thumb/Thumb';
import Chart from 'components/Chart/Chart';

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

const navigation = [
  {
    id: 1,
    label: 'Web Design',
    url: '#',
  },
  {
    id: 2,
    label: 'Mobile Apps',
    url: '#',
  },
  {
    id: 3,
    label: 'Branding',
    url: '#',
  },
];

const users = [
  {
    id: 1,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=1',
    name: 'KAMIL KOPERWAS',
    description: 'Graphic Designer, Web Designer, UI/UX Designer, Branding',
  },
  {
    id: 2,
    avatar: 'https://placem.at/people?w=265&h=150&txt=0&random=2',
    name: 'Adrianna Lipsum',
    description: 'Project Manager',
  },
]

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
            <div className={layout.row}>
              <div className={layout.columns2}>
                <Sidebar
                  title="Sidebar"
                  nav={navigation}
                 />
              </div>
              <div className={layout.columns2}>
                <Sidebar
                  title="Sidebar"
                  nav={navigation}
                  alt
                />
              </div>
            </div>
            <div className={layout.row}>
              <div className={layout.columns2}>
                <UserCard
                  {...users[0]}
                />
              </div>
              <div className={layout.columns2}>
                <UserCard
                  roundedAvatar
                  {...users[1]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={layout.row}>
          <div className={layout.thumb3col}>
            <Thumb image="https://placem.at/things?w=500&h=500&txt=0&random=4" />
          </div>
          <div className={layout.thumb7col}>
            <Thumb image="https://placem.at/things?w=800&h=200&txt=0&random=5" />
          </div>
          <div className={layout.thumb2col}>
            <Thumb image="https://placem.at/things?w=500&h=500&txt=0&random=6" />
          </div>
        </div>

        <div className={layout.row}>
          <div className={layout.columns2}>
            <div className={layout.row}>
              <div className={layout.columns2}>
                <Chart title="Statistics" type="line" />
              </div>
              <div className={layout.columns2}>
                <Chart title="Score" type="bars" />
              </div>
            </div>
          </div>
          <div className={layout.columns2}>
          </div>
        </div>
			</div>
		);
	}
}

export default App;
