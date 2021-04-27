import Styled from "styled-components";

export const SidebarContainer = Styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 180px;
  top: 0;
  left: 0;
  background-color: #F0F0F0;
  overflow-x: hidden;
  padding: 50px 10px;
`;

export const MenuBox = Styled.div`
  height:30px;
  background: ${(props) => (props.isActive ? "#D0D0D0" : "#F0F0F0")};
  margin-bottom: 5px;
  display: flex;  
  align-items: center;
  border-radius:4px;
  padding:0 6px;
  cursor:pointer;
`;

export const MenuIcon = Styled.div`
  float:left;
  width: 22px;
  display: flex;
  justify-content: center;
  
`;

export const MenuLabel = Styled.div`
  float:left;
  font-size:13px;
  margin-left: 6px;
  color: #232526;
  line-height: 16px;
  font-style: normal;
  font-weight: 500;
`;
