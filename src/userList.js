import React from 'react';
import ListItemPopOver from './listItemPopOver';
import './userList.css';

const ListItemWithPopOver = ({ item }) => (
  <div className="pop-over">
    <span className="pop-over-trigger">
      {item.name}
    </span>
    <span className="pop-over-extra-content">
      ({item.username})
    </span>
    <span className="pop-over-text">
      <ListItemPopOver data={item.address} />
    </span>
  </div>
)

const RenderListItem = ({ item }) => (
  <li><ListItemWithPopOver item={item}/></li>
)

export default ({ listData }) => (
  <div className="user-list">
    <ul>
			{
		    listData.map((listItem) => (
		      <RenderListItem item={listItem} />
		    ))
	  	}
		</ul>
  </div>
);
