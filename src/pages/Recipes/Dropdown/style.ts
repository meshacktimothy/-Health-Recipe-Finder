import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const MaxTimeContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 10px;
  width: 180px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 45px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: ${colors.primary01};
`;

export const DropImgs = styled.div<{ open: boolean }>`
  transition: 0.5s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropImgss = styled.div<{ open: boolean }>`
  transition: 0.5s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  margin-top: 60px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 300;
  list-style: none;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  color: ${colors.primary01};

  &:hover {
    border: 1px solid ${colors.primary01};
    border-radius: 5px;
  }
`;

export const MainList = styled.div`
  position: absolute;
  background: ${colors.white};
  width: 220px;
  padding: 5px;
  border-radius: 10px;
`;

export const CheckRadio = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #555;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: none;
  box-shadow: 0 0 10px ${colors.secondary06};
  margin-right: 10px;

  &:checked {
    border-color: ${colors.primary01};
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: ${colors.primary01};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const MaxPrepContainer = styled.div``;
export const SearchContainer = styled.div`
  display: flex;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 8px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Searchimage = styled.div``;
export const SearchInput = styled.input`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.3px;
  color: ${colors.primary01};
  border: none;
  outline: none;
`;
export const MaxPrepAndMaxCook = styled.div`
  display: flex;
  gap: 40px;
`;
// export const SearchContainer = styled.div``;
// export const SearchContainer = styled.div``;
// export const SearchContainer = styled.div``;
// export const SearchContainer = styled.div``;
