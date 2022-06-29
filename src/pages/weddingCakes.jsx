import dataTest1 from '../utilities/testData1';
import { useState } from "react";
import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from "../components/swiperSlideComponent";
import { Fade, Zoom } from "react-reveal";
import { Modal, Card, Image } from "antd";
const { Meta } = Card;


function WeddingCakes() {

  const [visible, setvisible] = useState(false)
  const [current, setcurrent] = useState()
  

  const onClick =(current)=>{
    setcurrent(current)
    setvisible(true)
  }

  return ( 
    <div id="kolo">
      <Fade>
        <CategoryTab name='Wedding Cakes' />
      </Fade>

        <div className="row d-flex justify-content-center align-items-center px-4">
          <Zoom>
            {
              dataTest1.map(data=>(
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
          footer={null}
          onCancel={()=>setvisible(false)}
          width={1000}
        >
          <SwiperSlideComponent data={dataTest1} />
        </Modal> */}

        
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setvisible(vis), current }}>
          {(dataTest1.map(data=>(
            <Image src={data.img} />
          )))}
        </Image.PreviewGroup>
      </div>

    </div>
  );
}

export default WeddingCakes;