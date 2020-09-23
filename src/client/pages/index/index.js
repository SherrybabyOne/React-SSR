import React from 'react';
import { Helmet } from 'react-helmet';
import './index.scss';

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const initData = props.initialData || {};
    this.state = {
      fetchData: initData.fetchData,
      page: initData.page,
    }
  }

  static async getInitialProps() {
    console.log('fetch data index');
    return {
      page: {
        tdk: {
          title: '首页 - react ssr',
          keywords: 'React SSR 列表',
          description: 'React-SSR 首页相关描述',
        }
      }
    }
  }

  componentDidMount() {
    if (!this.state.fetchData) {
      Index.getInitialProps().then(res => {
        const { fetchData = {}, page = {} } = res;
        this.setState({
          fetchData,
          page,
        });
      })
    }
  }

  handlerClick(){
    alert('一起来玩 react ssr 呀。');
  }

  render() {
    const { tdk = {} } = this.state.page || {};
    return (
      <div className="page">
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description}/>
          <meta name="keywords" content={tdk.keywords}/>
        </Helmet>
        <div className='page-index-box'>首页</div>
        <h1 onClick={this.handlerClick}>click here!</h1>
        <h2>听说？？？</h2>
      </div>
    )
  }
}