"use client"

import React, {useState, useRef, useEffect, ReactNode, CSSProperties } from "react";

import { cn } from "@/lib/utils";

const defaultCharset = ["X", "$", "@", "a", "H", "z", "o", "0", "y", "#", "?", "*", "0", "1", "+"];

function getRandomCharacter(charset: string[]): string {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

type CustomSpeed = {
  BASE_DELAY: number;
  REVEAL_DELAY: number;
  INITIAL_RANDOM_DURATION: number;
};

function createEventHandler(
  originalText: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  inProgress: boolean,
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>,
  speed: "fast" | "medium" | "slow" | CustomSpeed,
  charset: string[],
  setHasAnimated?: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const speedSettings = {
    fast: {
      BASE_DELAY: 10,
      REVEAL_DELAY: 10,
      INITIAL_RANDOM_DURATION: 100,
    },
    medium: {
      BASE_DELAY: 30,
      REVEAL_DELAY: 30,
      INITIAL_RANDOM_DURATION: 300,
    },
    slow: {
      BASE_DELAY: 60,
      REVEAL_DELAY: 60,
      INITIAL_RANDOM_DURATION: 600,
    },
  };

  const { BASE_DELAY, REVEAL_DELAY, INITIAL_RANDOM_DURATION } =
    typeof speed === "string" ? speedSettings[speed] : speed;

  const generateRandomText = () =>
    originalText
      .split("")
      .map((char) => (char === " " ? " " : getRandomCharacter(charset)))
      .join("");

  return async () => {
    if (inProgress) return;

    setInProgress(true);

    let randomizedText = generateRandomText();
    const endTime = Date.now() + INITIAL_RANDOM_DURATION;

    while (Date.now() < endTime) {
      setText(randomizedText);
      await new Promise((resolve) => setTimeout(resolve, BASE_DELAY));
      randomizedText = generateRandomText();
    }

    for (let i = 0; i < originalText.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, REVEAL_DELAY));
      setText(`${originalText.substring(0, i + 1)}${randomizedText.substring(i + 1)}`);
    }

    setInProgress(false);
    if (setHasAnimated) {
      setHasAnimated(true);
    }
  };
}

type LetterFxProps = {
  children: ReactNode;
  trigger?: "hover" | "instant" | "interval" | "triger";
  speed?: "fast" | "medium" | "slow" | CustomSpeed;
  charset?: string[];
  onTrigger?: (triggerFn: () => void) => void;
  interval?: number;
  className?: string;
  style?: CSSProperties;
};

function LetterFx({
  children,
  trigger = "hover",
  speed = "medium",
  charset = defaultCharset,
  onTrigger,
  interval = 5000,
  className,
  style,
}: LetterFxProps) {
  const [text, setText] = useState<string>(typeof children === "string" ? children : "");
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const originalText = useRef<string>(typeof children === "string" ? children : "");

  const eventHandlerRef = useRef<() => void>(() => {});

  useEffect(() => {
    eventHandlerRef.current = createEventHandler(
      originalText.current,
      setText,
      inProgress,
      setInProgress,
      speed,
      charset,
      trigger === "instant" ? setHasAnimated : undefined,
    );
  }, [inProgress, speed, charset, trigger]);

  useEffect(() => {
    if (typeof children === "string") {
      setText(children);
      originalText.current = children;

      if (trigger === "instant" && !hasAnimated) {
        eventHandlerRef.current();
      }
    }
  }, [children, trigger, hasAnimated]);

  useEffect(() => {
    if (trigger === "triger" && onTrigger) {
      onTrigger(eventHandlerRef.current);
    }
  }, [trigger, onTrigger]);

  useEffect(() => {
    if (trigger === "interval") {
      eventHandlerRef.current();
      const id = setInterval(() => {
        eventHandlerRef.current();
      }, interval);
      return () => clearInterval(id);
    }
  }, [trigger, interval]);

  return (
    <span
      data-slot="letter-fx"
      className={cn(className)}
      style={style}
      onMouseOver={trigger === "hover" ? eventHandlerRef.current : undefined}
    >
      {text}
    </span>
  );
}

export { LetterFx };
