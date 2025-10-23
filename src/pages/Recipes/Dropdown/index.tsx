import {
  DropdownContainer,
  ListItem,
  MaxTimeContainer,
  Text,
  MainList,
  DropImgs,
  CheckRadio,
  MaxPrepContainer,
  DropImgss,
  SearchInput,
  Searchimage,
  SearchContainer,
  MaxPrepAndMaxCook,
} from "./style";
import DropImage from "../../../assets/images/icon-chevron-down.svg";
import SearchImg from "../../../assets/images/icon-search.svg";
import { useState } from "react";

export default function Dropdown() {
  const [openProfile, setopenProfile] = useState(false);
  const [openMaxCook, setopenMaxCook] = useState(false);

  return (
    <DropdownContainer>
      <MaxPrepAndMaxCook>
        <MaxPrepContainer>
          <MaxTimeContainer onClick={() => setopenProfile((prev) => !prev)}>
            <Text>Max Prep Time </Text>
            <DropImgs open={openProfile}>
              <DropImage />
            </DropImgs>
          </MaxTimeContainer>
          {openProfile && (
            <MainList>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 0
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 5
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 10
                minutes
              </ListItem>

              <ListItem>Clear</ListItem>
            </MainList>
          )}
        </MaxPrepContainer>

        <MaxPrepContainer>
          <MaxTimeContainer onClick={() => setopenMaxCook((prev) => !prev)}>
            <Text>Max Prep Time </Text>
            <DropImgss open={openMaxCook}>
              <DropImage />
            </DropImgss>
          </MaxTimeContainer>
          {openMaxCook && (
            <MainList>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 0
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 5
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 10
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 10
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 15
                minutes
              </ListItem>
              <ListItem>
                <CheckRadio type="radio" name="Cheackbox"></CheckRadio> 20
                minutes
              </ListItem>

              <ListItem>Clear</ListItem>
            </MainList>
          )}
        </MaxPrepContainer>
      </MaxPrepAndMaxCook>
      <SearchContainer>
        <Searchimage>
          <SearchImg />
        </Searchimage>
        <SearchInput placeholder="Search by name or ingredient…" />
      </SearchContainer>
    </DropdownContainer>
  );
}
