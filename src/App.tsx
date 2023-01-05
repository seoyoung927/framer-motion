import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TiTimes } from "react-icons/ti";

//styled-components
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxWrapper = styled(motion.div)`
  column-count: 2;
  column-gap: 0;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: rgba(255,255,255,1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;
const Title = styled(motion.h2)`
  font-weight: 600;
  font-size: 24px;
`;
const Content = styled(motion.h5)`
  font-weight: 500;
  font-size: 100px;
  padding: 40px;
  text-align: center;
`;
const PopupWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const PopupBack = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(186, 2, 121, 0.6);
  cursor: pointer;
`;
const Popup = styled(motion.div)`
  width: 400px;
  height: 300px;
  z-index: 1;
  background-color: white;
  border-radius: 20px;
  position: relative;
  padding: 16px;
  cursor: default;
`;
const PopupBtn = styled(motion.button)`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEEEEE;
  border-radius: 100px;
  border: 0px;
  position: absolute;
  left:352px;
  top: 16px;
  &:hover{
    background-color: #DDDDDD;
  }
  cursor: pointer;
`;

//variants
const myVar = {
  exit:{
    opacity: 0,
    transition:{
      duration: 0.5,
    }
  }
}

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const items = [{ id: 1, title: "Coffee", subtitle: "☕", },
  { id: 2, title: "Ice-cream", subtitle: "🍦", },
  { id: 3, title: "Milk", subtitle: "🥛", },
  { id: 4, title: "Cake", subtitle: "🍰", }]

  console.log(selectedId);
  return (
    <Wrapper>
      <BoxWrapper>
      {items.map(item => (
        <Box key={item.id} layoutId={item.id.toString()} onClick={() => setSelectedId(item.id)}>
          <Title>{item.title}</Title>
        </Box>
      ))}
      </BoxWrapper>
      <AnimatePresence>
        {selectedId && (
          <PopupWrapper>
            <PopupBack variants={myVar} exit="exit" onClick={() => setSelectedId(null)}/>
            <Popup layoutId={selectedId.toString()} onClick={() => setSelectedId((cur)=>cur)}>
              <Title>{items[selectedId - 1].title}</Title>
              <Content>{items[selectedId - 1].subtitle}</Content>
              <PopupBtn onClick={() => setSelectedId(null)}><TiTimes size={16} /></PopupBtn>
            </Popup>
          </PopupWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

