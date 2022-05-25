import Masonry from "react-responsive-masonry";

function MasonryComponent(props) {
  return ( 
    <>
       <Masonry columnsCount={3} gutter="10px">
        {props.data.map((dataTest2) => (
          <img
            key={dataTest2.id}
            src={dataTest2.img}
            style={{width: "100%", display: "block"}}
          />
        ))}
      </Masonry>
    </>
  );
}

export default MasonryComponent;