import Countdown from "react-countdown";
import styled from "styled-components";

export const CountdownWrapper = styled(Countdown)``;
export const CountdownElementWrapper = styled.div`
  display: flex;
  align-items: center;

  .count_number {
    position: relative;
    display: flex;
    align-items: center;

    &::before {
      position: absolute;
      right: 0px !important;
      top: auto;
      /* height: 7px;
      width: 7px;   */
      color: rgba(255, 255, 255, 0.2);
      content: ":";
    }

    &:last-child {
      &::before {
        display: none;
      }
    }
  }
`;
