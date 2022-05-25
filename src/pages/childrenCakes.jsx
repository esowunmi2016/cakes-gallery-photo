import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from '../components/swiperSlideComponent';
import dataTest1 from '../utilities/testData1';
import childrenCakesData from "../utilities/childrenCakesData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-reveal";

import { Button, Card, Modal } from "antd";
const { Meta } = Card;


function ChildrenCakes() {

  const [visible, setvisible] = useState(false)
  
  

  return ( 
    <>
      <Fade>
        <CategoryTab name="children's Cakes" />
      </Fade>
 
      <div className="row d-flex justify-content-center align-items-center">
        <Zoom>
          {
            childrenCakesData.map(data=>(
              <div className="col-3 d-flex justify-content-center align-items-center py-4">
                <Card
                  hoverable
                  style={{ width: 240, borderRadius:'3%' }}
                  cover={<img alt={data.name} src={data.img} />}
                  onClick={()=>setvisible(true)}
                >
                  <Meta title={data.name} />
                </Card>
              </div>
            ))
          }
        </Zoom>
      </div>

      <Modal
        visible={visible}
        onCancel={()=>setvisible(false)}
        footer={null}
        width={1000}
        centered
      
      >
        <SwiperSlideComponent data={childrenCakesData} />
      </Modal>
    </>
  );
}

export default ChildrenCakes;