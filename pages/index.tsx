import {
  NextPageContext,
  NextComponentType,
} from 'next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Page from '../containers/page';
import { addTodo } from '../actions';
import { Store } from '../store';
import fetch from 'isomorphic-unfetch';

interface IndexPageContext extends NextPageContext {
  store: Store;
}

const IndexPage: NextComponentType<IndexPageContext> = compose()(Page);

IndexPage.getInitialProps = async ({ store, req }) => {
  const isServer: boolean = !!req;
  const { todo } = store.getState();

  // we can add any custom data here
  // for examle, the data from api server
  const res = await fetch('http://localhost:8000/data');
  const datas = await res.json();
  console.log(`Show data fetched. Count: ${datas.length}`);
  let result = datas.map((data) => {
    return data.text
  })
  console.log(result);

  store.dispatch(addTodo(Object.assign(todo.item, {
    value: 'Hello World',
  })));

  return {
    isServer,
    result,
  };
}

export default connect()(IndexPage);
