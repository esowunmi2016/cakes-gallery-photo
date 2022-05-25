import { Link } from "react-router-dom";
import Fade from 'react-reveal';
import {Card, Button} from 'antd';

import img2 from '../assets/childrenCakes/5.jpg';
import img3 from '../assets/fondant/1.jpg';
import img4 from '../assets/butterCream/1.jpg';

import '../style/categories.css'

const { Meta } = Card;

const categories = [
  {
    id:1,
    name:'Wedding Cakes',
    img:'https://picsum.photos/00',
    link:'/weddingCakes'
  },
  {
    id:2,
    name:'Children Cakes',
    img: img2,
    link:'/childrenCakes'
  },
  {
    id:3,
    name:'Fondant Cakes',
    img:img3,
    link:'/fondatCakes'
  },
  {
    id:4,
    name:'Butter-Cream Cakes',
    img:img4,
    link:'/butterCreamCakes'
  },
  {
    id:5,
    name:'Tall Cakes',
    img:'https://picsum.photos/00',
    link:'/tallCakes'
  },
]

function Categories() {
  return ( 
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          fontSize:'300%',
          fontWeight:'bold',
          display:'block',
          height:'10vh',
        }}
        
      >
        <div>Cakes Gallery Catalouge</div>
      </div>

      <div 
        className='d-flex align-items-center justify-content-center py-4'
        id="lay1"
        style={{
          minHeight:'90vh',
        }}
      >
        <div
          className='d-flex justify-content-center align-items-middle' 
          style={{
            width:'75%',
            height:'70%',
            borderRadius:'3%',
            background:'rgba(255,255,255,0.5)',
            // backdropFilter:'blur(500px)'
          }}
        >
          <Fade>
            <div 
              className='row d-flex justify-content-center py-4 gy-4 gx-4' 
              style={{
                height:'100%', 
                width:'80%',
              }}
            >
              {
                categories.map(data=>(
                  <div className='col-4 d-flex justify-content-center align-items-center py-4'>
                    <Link to={data.link}>
                      <Card
                        hoverable
                        style={{  borderRadius:'3%' }}
                        cover={<img alt={data.name} src={data.img} />}
                        // bodyStyle={{height:'0vh'}}
                      >
                        <Meta title={data.name} />
                      </Card>
                    </Link> 
                  </div>
                ))
              }
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Categories;