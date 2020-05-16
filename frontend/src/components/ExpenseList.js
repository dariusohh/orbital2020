import React from 'react';
import { List} from 'antd';


const Expense = (props) => {
    return (
        <List
          itemLayout="horizontal"
          dataSource={props.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a href={`/expense/${item.id}/`}>{item.name}</a>}
                description = {item.amount}
              />
            </List.Item>
          )}
        />
      );
}

export default Expense;




