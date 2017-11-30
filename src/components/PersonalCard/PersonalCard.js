import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import githubImg from "./img/github.svg";
import vkImg from "./img/vk.svg";
import telegramImg from "./img/telegram.svg";

const styleSettings = {
  animation: {
    step: 0.5
  },
  font: {
    color: "#525252"
  }
};

const toDown = keyframes`
  from {
    position: relative;
    top: -15px;
    opacity: 0;
  }

  to {
    opacity: 1;
    top: 0;
  }
`;

const toUp = keyframes`
  from {
    position: relative;
    bottom: -15px;
    opacity: 0;
  }

  to {
    opacity: 1;
    bottom: 0;
  }
`;

const drawLine = keyframes`
  from {
    visibility: hidden;
    transform: scaleX(0);
  }

  to {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Wrapper = styled.div`
  font-family: "Open Sans";
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${styleSettings.font.color};
  font-size: 5vw;
  font-weight: 100;
`;

const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 100;
  animation: ${toDown} ${styleSettings.animation.step}s ease-in-out 1;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 0.05em;
    background-color: ${styleSettings.font.color};
    animation: ${drawLine} ${styleSettings.animation.step}s ease-in-out 1
      ${styleSettings.animation.step}s;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${toUp} ${styleSettings.animation.step}s ease-in-out 1;

  & li {
    margin-left: 0.2em;
  }
`;

const Svg = styled.img`
  width: 3vw;
  height: 3vw;
  filter: grayscale(100%);
  transition: filter ${styleSettings.animation.step}s;
`;

const Link = styled.a`
  &:hover ${Svg} {
    filter: grayscale(0%);
  }
`;

const Description = styled.small`
  animation: ${toUp} ${styleSettings.animation.step}s ease-in-out 1;
`;

class PersonalCard extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Valery Liubimov</Title>
          <Description>Front-end developer</Description>
          <SocialList>
            <li>
              <Link
                href="https://github.com/vUdav"
                target="_blank"
                data-title="GitHub"
                rel="noopener noreferrer"
              >
                <Svg src={githubImg} />
              </Link>
            </li>
            <li>
              <Link
                href="https://vk.com/vudav"
                target="_blank"
                data-title="Vkontakte"
                rel="noopener noreferrer"
              >
                <Svg src={vkImg} />
              </Link>
            </li>
            <li>
              <Link
                href="https://telegram.me/vudav"
                target="_blank"
                data-title="Telegram"
                rel="noopener noreferrer"
              >
                <Svg src={telegramImg} />
              </Link>
            </li>
          </SocialList>
        </Container>
      </Wrapper>
    );
  }
}

export default PersonalCard;
