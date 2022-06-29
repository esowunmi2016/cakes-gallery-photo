import { useState } from "react";
import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from "../components/swiperSlideComponent";
import ImgComponent1 from "../components/antdimgComponent";
import dataTest1 from '../utilities/testData1';
import fondantCakesData from '../utilities/fondantCakes';
import { Fade, Zoom } from "react-reveal";
import { Modal, Card, Image } from "antd";
const { Meta } = Card;

function FondatCakes() {

  const [visible, setvisible] = useState(false)
  const [current, setcurrent] = useState()
  

  const onClick =(current)=>{
    setcurrent(current)
    setvisible(true)
  }


  return ( 
    <>
      <CategoryTab name='Fondant Cakes' />

      
      <div className="row d-flex justify-content-center align-items-center px-4">
        <Zoom>
          {
            fondantCakesData.map(data=>(
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

      {/* <Modal
        visible={visible}
        onCancel={()=>setvisible(false)}
        footer={null}
        width={1000}
        centered
      
      >
        <SwiperSlideComponent data={fondantCakesData} />
      </Modal>
       */}
     


      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setvisible(vis), current }}>
          {(fondantCakesData.map(data=>(
            <Image src={data.img} />
          )))}
        </Image.PreviewGroup>
      </div>
      
      
    </>
  );
}

export default FondatCakes;