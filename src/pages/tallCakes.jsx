import { useState } from "react";
import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from "../components/swiperSlideComponent";
import dataTest1 from '../utilities/testData1';
import { Fade, Zoom } from "react-reveal";
import { Modal, Card } from "antd";
const { Meta } = Card;


function TallCakes() {

  const [visible, setvisible] = useState(false)


  return ( 
    <>
      <CategoryTab name='Tall Cakes' />

          
      <div className="row d-flex justify-content-center align-items-center">
        <Zoom>
          {
            dataTest1.map(data=>(
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
        <SwiperSlideComponent data={dataTest1} />
      </Modal>
    </>
  );
}

export default TallCakes;