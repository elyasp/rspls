import { keyframes } from "styled-components";

export const zoom = keyframes`
  0% {
      transform: scale(.8)
      }
  100% {
      transform: scale(1.4)
      }
`;

export const twirlText = keyframes`
  0% {
    text-shadow:
      4px -4px 0 hsla(270, 100%, 66%, 0.3), 
      3px -3px 0 hsla(270, 100%, 66%, 0.3), 
      2px -2px 0 hsla(270, 100%, 66%, 0.3), 
      1px -1px 0 hsla(270, 100%, 66%, 0.3),
      -4px 4px 0 hsla(139, 100%, 73%, 0.3), 
      -3px 3px 0 hsla(139, 100%, 73%, 0.3), 
      -2px 2px 0 hsla(139, 100%, 73%, 0.3), 
      -1px 1px 0 hsla(139, 100%, 73%, 0.3)
    ;
  }
  25% {    
    text-shadow:      
      -4px -4px 0 hsla(139, 100%, 73%, 0.3), 
      -3px -3px 0 hsla(139, 100%, 73%, 0.3), 
      -2px -2px 0 hsla(139, 100%, 73%, 0.3), 
      -1px -1px 0 hsla(139, 100%, 73%, 0.3),
      4px 4px 0 hsla(270, 100%, 66%, 0.3), 
      3px 3px 0 hsla(270, 100%, 66%, 0.3), 
      2px 2px 0 hsla(270, 100%, 66%, 0.3), 
      1px 1px 0 hsla(270, 100%, 66%, 0.3)      
    ;
  }
  50% {
    text-shadow:
      -4px 4px 0 hsla(270, 100%, 66%, 0.3), 
      -3px 3px 0 hsla(270, 100%, 66%, 0.3), 
      -2px 2px 0 hsla(270, 100%, 66%, 0.3), 
      -1px 1px 0 hsla(270, 100%, 66%, 0.3),
      4px -4px 0 hsla(139, 100%, 73%, 0.3), 
      3px -3px 0 hsla(139, 100%, 73%, 0.3), 
      2px -2px 0 hsla(139, 100%, 73%, 0.3), 
      1px -1px 0 hsla(139, 100%, 73%, 0.3)
    ;
  }
  75% {
    text-shadow:
      4px 4px 0 hsla(139, 100%, 73%, 0.3), 
      3px 3px 0 hsla(139, 100%, 73%, 0.3), 
      2px 2px 0 hsla(139, 100%, 73%, 0.3), 
      1px 1px 0 hsla(139, 100%, 73%, 0.3),
      -4px -4px 0 hsla(270, 100%, 66%, 0.3), 
      -3px -3px 0 hsla(270, 100%, 66%, 0.3), 
      -2px -2px 0 hsla(270, 100%, 66%, 0.3), 
      -1px -1px 0 hsla(270, 100%, 66%, 0.3)      
    ;
  }
  100% {
    text-shadow:
      4px -4px 0 hsla(270, 100%, 66%, 0.3), 
      3px -3px 0 hsla(270, 100%, 66%, 0.3), 
      2px -2px 0 hsla(270, 100%, 66%, 0.3), 
      1px -1px 0 hsla(270, 100%, 66%, 0.3),
      -4px 4px 0 hsla(139, 100%, 73%, 0.3), 
      -3px 3px 0 hsla(139, 100%, 73%, 0.3), 
      -2px 2px 0 hsla(139, 100%, 73%, 0.3), 
      -1px 1px 0 hsla(139, 100%, 73%, 0.3)
    ;
  }  
`;
