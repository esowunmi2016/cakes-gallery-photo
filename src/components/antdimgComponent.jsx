import { Image } from "antd";
import { useState } from "react";

function ImgComponent1(props) {

  const [visible, setvisible] = useState(props.visible)

  return ( 
    <div style={{ display: 'none' }}>
      <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setvisible(vis) }}>
        {(props.data.map(data=>(
          <Image src={data.img} />
        )))}
      </Image.PreviewGroup>
    </div>
  );
}

export default ImgComponent1;
