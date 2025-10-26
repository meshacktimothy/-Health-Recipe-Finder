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
  const [selectedPrepTime, setSelectedPrepTime] = useState<string | null>(null);
  const [selectedCookTime, setSelectedCookTime] = useState<string | null>(null);

  const handleClearPrep = () => {
    setSelectedPrepTime(null);
    setopenProfile(false);
  };

  const handleClearCook = () => {
    setSelectedCookTime(null);
    setopenMaxCook(false);
  };

  return (
    <DropdownContainer>
      <MaxPrepAndMaxCook>
        <MaxPrepContainer>
          <MaxTimeContainer onClick={() => setopenProfile((prev) => !prev)}>
            <Text>{selectedPrepTime ? `${selectedPrepTime} minutes` : "Max Prep Time"}</Text>
            <DropImgs open={openProfile}>
              <DropImage />
            </DropImgs>
          </MaxTimeContainer>

          {openProfile && (
            <MainList>
              <ListItem onClick={() => setSelectedPrepTime("0")}>
                <CheckRadio type="radio" checked={selectedPrepTime === "0"} readOnly /> 0 minutes
              </ListItem>
              <ListItem onClick={() => setSelectedPrepTime("5")}>
                <CheckRadio type="radio" checked={selectedPrepTime === "5"} readOnly /> 5 minutes
              </ListItem>
              <ListItem onClick={() => setSelectedPrepTime("10")}>
                <CheckRadio type="radio" checked={selectedPrepTime === "10"} readOnly /> 10 minutes
              </ListItem>
              <ListItem onClick={handleClearPrep} style={{ cursor: "pointer" }}>
                Clear
              </ListItem>
            </MainList>
          )}
        </MaxPrepContainer>

        <MaxPrepContainer>
          <MaxTimeContainer onClick={() => setopenMaxCook((prev) => !prev)}>
            <Text>{selectedCookTime ? `${selectedCookTime} minutes` : "Max Cook Time"}</Text>
            <DropImgss open={openMaxCook}>
              <DropImage />
            </DropImgss>
          </MaxTimeContainer>

          {openMaxCook && (
            <MainList>
              {["0", "5", "10", "15", "20"].map((time) => (
                <ListItem key={time} onClick={() => setSelectedCookTime(time)}>
                  <CheckRadio type="radio" checked={selectedCookTime === time} readOnly /> {time} minutes
                </ListItem>
              ))}
              <ListItem onClick={handleClearCook} style={{ cursor: "pointer" }}>
                Clear
              </ListItem>
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
