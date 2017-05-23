import React, {Component} from 'react';
import _map from 'lodash/map';
import _slice from 'lodash/slice';

import Sidebar from 'components/Sidebar/Sidebar';
import Post from 'components/Post/Post';
import Slider from 'components/Slider/Slider';
import UserCard from 'components/UserCard/UserCard';
import Calendar from 'components/Calendar/Calendar';
import Thumb from 'components/Thumb/Thumb';
import Chart from 'components/Chart/Chart';
import Weather from 'components/Weather/Weather';
import Login from 'components/Login/Login';
import Register from 'components/Register/Register';
import Search from 'components/Search/Search';
import Chat from 'components/Chat/Chat';
import Comment from 'components/Comment/Comment';

import {
  chat,
  users,
  posts,
  navigation,
  slides,
} from 'mock-data.js';
import layout from 'css/layout.css';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div>
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

                <Calendar />
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
            <div className={layout.row}>
              <div className={layout.columns2}>
                <Weather title="Weather" city="Paris,France" />
              </div>
              <div className={layout.columns2}>
                <Weather title="Weather" city="Bucharest,Romania" withImage />
              </div>
            </div>
          </div>
        </div>


        <div className={layout.row}>
          <div className={layout.columns2}>
            <Login title="Login" />
          </div>
          <div className={layout.columns2}>
            <Register title="Register" />
          </div>
        </div>

        <div className={layout.row}>
          <div className={layout.columns2}>
            {_map(_slice(chat, 0, 2), (item) => {
              return (
                <Chat
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>
          <div className={layout.columns2}>
            {_map(_slice(chat, 2, 4), (item) => {
              return (
                <Comment
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>
        </div>

        <div className={layout.row}>
          <div className={layout.columns2}>
            <Search />
          </div>
          <div className={layout.columns2}>
            <Search alt />
          </div>
        </div>

			</div>
		);
	}
}

export default Home;
