import { Link } from "react-router-dom";
import {Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons'

function CategoryTab(props) {
  return ( 
    <>
      <div 
        style={{
          height:'15vh', 
          background:'linear-gradient(0deg, rgba(255,255,255,0.698383577063638) 0%, rgba(238,217,221,1) 40%)'
        }}
      >
        <div 
          className="d-flex justify-content-start align-items-center px-4" 
          style={{height:'50%'}}
        >
          <Link to={'/'}>
            <Button 
              type="primary" 
              shape="circle" 
              size="large" 
              icon={<ArrowLeftOutlined  />} 
              style={{ background: "pink", borderColor: "purple" }}
            />
          </Link> 
        </div>
       
        <div 
          className="d-flex justify-content-center align-items-center" 
          style={{
            height:'50%', 
            fontSize:'200%', 
            fontWeight:'bold',
          }}
        >
          {props.name}
        </div>
      </div>
    </>
  );
}

export default CategoryTab;