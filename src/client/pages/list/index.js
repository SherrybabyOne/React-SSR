import React from 'react';
import { Helmet } from 'react-helmet';
import tempData from './data';

//组件
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const initData = props.initialData || {};
    const { fetchData, page } = initData;
    this.state = {
      fetchData,
      page,
    }
  }

  //静态方法  数据预取方法
  static async getInitialProps() {
    // 模拟数据请求方法
    const fetchData = () =>{
      return new Promise(resolve=>{
        setTimeout(() => {
          resolve({
            code: 0,
            data: tempData
          })
        }, 100);
      });
    }
    const res = await fetchData();
    
    return {
      fetchData: res,
      page: {
        tdk: {
          title: '列表页 - react ssr',
          keywords: 'React SSR 列表',
          description: 'React-SSR 列表相关描述',
        }
      }
    }
  }

  async handlerClick(){
    alert('一起来玩 react ssr 呀。');
  }

  componentDidMount() {
    if (!this.state.fetchData) {
      Index.getInitialProps().then(res => {
        const { fetchData = {}, page = {} } = res;
        this.setState({
          fetchData,
          page,
        })
      })
    }
  }

  render() {
    //渲染逻辑
    const { code, data } = this.state.fetchData || {};
    const { tdk = {} } = this.state.page || {};
    
    return <div>
      <Helmet>
        <title>{tdk.title}</title>
        <meta name="description" content={tdk.description}/>
        <meta name="keywords" content={tdk.keywords}/>
      </Helmet>
      {
        data && data.map((item,index) => {
          return <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        })
      }
      {!data&&<div>暂无数据</div>}
    </div>
  }
}