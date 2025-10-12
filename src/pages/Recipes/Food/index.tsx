// // src/components/Dropdown.tsx
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Container,
//   ToggleButton,
//   DropdownList,
//   Label,
//   Input,
//   ClearButton,
// } from "./styles";

// interface DropdownProps {
//   label: string;
//   options: string[];
//   onSelect?: (value: string) => void; // optional callback to parent
//   closeOnSelect?: boolean; // default true
// }

// export default function Dropdown({
//   label,
//   options,
//   onSelect,
//   closeOnSelect = true,
// }: DropdownProps) {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<string>("");

//   // persistent unique name for the radio group so multiple dropdowns don't conflict
//   const nameRef = useRef(
//     `${label.replace(/\s+/g, "-").toLowerCase()}-${Math.random()
//       .toString(36)
//       .slice(2, 8)}`
//   );

//   // ref used to detect outside clicks
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     }
//     function handleKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setOpen(false);
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, []);
//   // notify parent when selection changes
//   useEffect(() => {
//     if (onSelect) onSelect(selected);
//   }, [selected, onSelect]);

//   const handleSelect = (option: string) => {
//     setSelected((prev) => (prev === option ? "" : option));
//     if (closeOnSelect) setOpen(false);
//   };

//   const clearAll = () => {
//     setSelected("");
//     setOpen(false);
//   };

//   return (
//     <Container ref={containerRef}>
//       <ToggleButton onClick={() => setOpen((s) => !s)}>{label} ▾</ToggleButton>

//       {open && (
//         <DropdownList role="menu" aria-label={label}>
//           {options.map((option) => (
//             <Label key={option}>
//               <Input
//                 type="radio"
//                 name={nameRef.current}
//                 checked={selected === option}
//                 onChange={() => handleSelect(option)}
//               />
//               {option}
//             </Label>
//           ))}

//           {selected && <ClearButton onClick={clearAll}>Clear</ClearButton>}
//         </DropdownList>
//       )}
//     </Container>
//   );
// }
