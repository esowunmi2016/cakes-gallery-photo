import { useState } from "react";
import CategoryTab from "../components/categoryTab";
import SwiperSlideComponent from "../components/swiperSlideComponent";
import dataTest1 from '../utilities/testData1';
import butterCreamCakesData from "../utilities/butterCreamData";
import { Fade, Zoom } from "react-reveal";
import { Modal, Card, Image } from "antd";
const { Meta } = Card;


function ButterCreamCakes() {

  const [visible, setvisible] = useState(false)
  const [current, setcurrent] = useState()
  

  const onClick =(current)=>{
    setcurrent(current)
    setvisible(true)
  }

  return ( 
    <>
      <CategoryTab name='Butter Cream Cakes' />

          
      <div className="row d-flex justify-content-center align-items-center px-4">
        <Zoom>
          {
            butterCreamCakesData.map(data=>(
              <div className="col-md-3 col-6 d-flex justify-content-center align-items-center py-4 px-4">
                <Card
                  hoverable
                  style={{ width: 170, borderRadius:'3%' }}
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
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setvisible(vis), current }}>
          {(butterCreamCakesData.map(data=>(
            <Image src={data.img} />
          )))}
        </Image.PreviewGroup>
      </div>
      
    </>
  );
}

export default ButterCreamCakes;