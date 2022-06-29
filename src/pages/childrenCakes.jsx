import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from '../components/swiperSlideComponent';
import dataTest1 from '../utilities/testData1';
import childrenCakesData from "../utilities/childrenCakesData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

import { Button, Card, Modal, Image } from "antd";
const { Meta } = Card;


function ChildrenCakes() {

  const [visible, setvisible] = useState(false)
  const [current, setcurrent] = useState()
  

  const onClick =(current)=>{
    setcurrent(current)
    setvisible(true)
  }

  return ( 
    <>

      <Fade>
        <CategoryTab name="children's Cakes" />
      </Fade>
 
      <div className="row d-flex justify-content-center align-items-center px-4">
        <Zoom>
          {
            childrenCakesData.map(data=>(
              <div className="col-md-3 col-6 d-flex justify-content-center align-items-center py-4 px-4">
                <Card
                  hoverable
                  style={{ width: 240, borderRadius:'3%' }}
                  cover={<img alt={data.name} src={data.img} />}
                  onClick={()=>onClick(data.id-1)}
                >
                  <Meta title={data.name} />
                </Card>
              </div>
            ))
          }
        </Zoom>
      </div>


      <div style={{ display: 'none' }}>
        <Image.PreviewGroup 
          preview={{ 
            visible, 
            onVisibleChange: vis => setvisible(vis),
            current
          }}
        >
          {(childrenCakesData.map(data=>(
            <Image src={data.img} />
          )))}
        </Image.PreviewGroup>
      </div>

    </>
  );
}

export default ChildrenCakes;