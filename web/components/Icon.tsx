import React, { SVGProps } from "react";

export type IconType = 'arrowLeft' | 'arrowRight' | 'externalLink' | 'loader' | 'logo' | 'search';

interface IconProps extends Props {
  type: IconType;
}

interface Props extends SVGProps<SVGSVGElement> {
  className?: string;
}

const Icon: React.FC<IconProps> = ({type, ...props}) => type in Icons
  ? Icons[type](props)
  : null;

const Icons: Record<IconType, React.FC<Props>> = {
  arrowLeft: (props) => (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M15,8l-14,0m4,-4l-4,4l4,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  arrowRight: (props) => (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M1,8l14,0m-4,-4l4,4l-4,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  externalLink: (props) => (
    <svg {...props} viewBox="0 0 25 25">
      <path fill="currentColor" fillRule="evenodd" d="M14.41 2.04c-.68.2-.99 1.25-.54 1.84.36.47.43.47 2.96.5l2.25.02-5 5.01a186.72 186.72 0 0 0-5.12 5.23c-.5.99.61 2.1 1.6 1.6.12-.05 2.47-2.36 5.23-5.11l5.01-5 .02 2.25c.02 2.52.04 2.6.5 2.95.61.47 1.65.14 1.85-.57.12-.45.1-7.74-.03-8.04-.33-.77-.21-.76-4.7-.75-2.1 0-3.9.03-4.03.07M4.13 4.54a3.65 3.65 0 0 0-2.31 2.27c-.2.52-.28 13.15-.09 13.96a3.66 3.66 0 0 0 2.71 2.71c.81.19 13.45.11 13.96-.08a3.71 3.71 0 0 0 2.31-2.46c.1-.33.11-.78.1-3.31l-.02-2.94-.16-.22c-.54-.75-1.77-.59-2.1.28-.05.12-.07 1.12-.07 2.8 0 2.91-.01 2.96-.47 3.35-.32.27 0 .25-6.87.23l-6.36-.02-.24-.18c-.49-.37-.46.07-.46-6.98 0-6.88-.03-6.5.38-6.87.34-.31.48-.33 3.24-.33 1.67 0 2.65-.02 2.77-.07.87-.32 1.04-1.56.29-2.1l-.23-.16-2.97-.01c-2.93-.01-2.98-.01-3.42.14"/>
    </svg>
  ),
  loader: (props) => (
    <svg {...props} viewBox="0 0 16 16">
      <path d="M1,8 a7,7 0 1,1 7,7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  ),
  logo: (props) => (
    <svg {...props} viewBox="0 0 100 100">
      <path fill="currentColor" fillRule="evenodd" d="M27.2 2.18c0 .09-.28.17-.82.25-.9.13-1.57.26-2.28.42l-.85.2a25.65 25.65 0 0 0-4.1 1.4A33.56 33.56 0 0 0 15.6 6.3l-.95.6c-1.56.98-4.7 3.8-5.76 5.19a81.35 81.35 0 0 1-.78 1A33.8 33.8 0 0 0 5.9 16.5a22.56 22.56 0 0 1-.5.9 8 8 0 0 0-.34.78 26.3 26.3 0 0 0-1.56 4.6c-.25.97-.3 1.15-.4 1.77l-.23 1.3c-.2 1.05-.16 5.92.05 7.05.22 1.15.34 1.69.47 2.23l.2.8.21.77c.07.22.14.52.17.67.03.15.09.3.14.33.05.03.09.14.09.25 0 .11.2.66.45 1.22l.61 1.38c1.58 3.57 5.08 7.8 8.54 10.3a33.24 33.24 0 0 0 5.74 3.24c.23.07.9.32 1.51.53.6.22 1.32.45 1.6.52l.85.21a24.35 24.35 0 0 0 1.6.35l.85.15c1.3.25 3.11.32 10 .38l7.4.07v10.65c0 11.32-.01 11.44-.5 12.6a7.39 7.39 0 0 1-5.1 4.38c-1.02.28-2.85.32-15.98.32-15.21 0-13.99-.06-15.65.75-.8.4-2.52 1.95-2.52 2.28 0 .1-.04.17-.09.17-.05 0-.2.28-.34.62a13.21 13.21 0 0 1-.41.93 1.38 1.38 0 0 0-.16.47c0 .1-.05.18-.1.18-.18 0-.13 1.56.05 1.63.08.04.15.16.15.28 0 .22.08.51.38 1.38a7.7 7.7 0 0 0 1.12 1.83c.11.12.2.25.2.29 0 .25 2.31 1.68 2.72 1.69.09 0 .2.04.23.1.04.05.18.1.33.1.35 0 1.05.25 1.1.39.06.18 62.28.15 62.35-.03.05-.14.38-.22 1.22-.32 1.95-.23 5.52-1.05 6.28-1.45.09-.05.26-.09.36-.09.11 0 .23-.05.26-.1.04-.06.14-.1.23-.1.1 0 .45-.13.77-.29l1.3-.57c.8-.33 1.15-.51 2.53-1.33a5.6 5.6 0 0 1 .57-.31c.02 0 .59-.4 1.26-.88a28.36 28.36 0 0 0 9.23-11.12c.1-.25.24-.61.33-.8l.24-.55c.73-1.7 1.79-6.19 1.79-7.63 0-.4.05-.66.15-.76.21-.21.23-42.81.01-42.89-.08-.04-.16-.3-.2-.74a21.3 21.3 0 0 0-.55-3.48 23.5 23.5 0 0 0-1.01-3.38.82.82 0 0 1-.1-.32.84.84 0 0 0-.09-.33l-.36-.77C92.2 12.2 86.74 6.87 80.2 4.36a17.61 17.61 0 0 1-1.02-.42.94.94 0 0 0-.37-.09c-.11 0-.22-.05-.26-.1-.03-.06-.17-.1-.3-.1-.13 0-.26-.05-.3-.1-.03-.06-.17-.1-.3-.1-.13 0-.26-.04-.29-.09-.03-.05-.22-.11-.43-.15a12.15 12.15 0 0 1-.78-.15c-1.7-.39-3.62-.7-4.28-.71-.44 0-.57-.04-.57-.15 0-.13-2.52-.15-22.05-.15-17.84 0-22.05.02-22.05.13m4.85 13.85c.98.2 2.24.63 3.21 1.07.3.14.57.25.6.25.09 0 2.3 1.48 2.59 1.75 3.38 3 4.77 5.86 4.92 10.14.25 6.9-4.99 12.85-12.24 13.9a16.05 16.05 0 0 1-3.55.01l-1.2-.2c-1.15-.2-1.9-.47-3.45-1.22a13.33 13.33 0 0 1-4.8-3.84 16.33 16.33 0 0 1-2.24-4.09l-.2-.6c-.53-1.35-.62-4.69-.18-6.65 1.1-4.88 4.97-8.85 10.04-10.3 1.55-.45 4.86-.55 6.5-.22m40.6-.09a13.97 13.97 0 0 1 7.98 4.28 7.24 7.24 0 0 1 1.2 1.47l.37.6c.5.77 1.2 2.45 1.48 3.53.27 1.02.31 1.22.39 2.08.26 2.89-.28 5.9-1.39 7.92a12.5 12.5 0 0 1-2.33 3.2c-1 1.05-1.88 1.76-2.9 2.32l-.85.47a15.76 15.76 0 0 1-5.97 1.44c-6.85 0-12.67-4.96-13.53-11.55a6.72 6.72 0 0 0-.15-.85c-.2-.5 0-3.2.35-4.75l.17-.78c.03-.15.1-.3.15-.33a5.97 5.97 0 0 1 .54-1.4c2.56-5.4 8.79-8.69 14.49-7.65m-10.39 40.3a4.48 4.48 0 0 1 2.88 1.93c.6 1.04.66 1.51.75 6.33.07 4.1.09 4.22.83 5.38 1.97 3.1 5.83 3.78 9.03 1.6a7.88 7.88 0 0 0 1.65-2.08c.59-1.29.71-2.48.69-7-.01-3.54.01-3.77.53-4.65 1.05-1.78 3.85-2.13 5.42-.69 1.07.97 1.15 1.58 1.15 8.14.01 4.9-.04 6-.4 7.7l-.16.77c-.03.15-.1.3-.14.34-.05.03-.09.13-.09.24 0 .1-.09.35-.2.56a14.93 14.93 0 0 1-3.44 4.93l-.7.62c-.43.38-1.3.99-1.41.99-.04 0-.25.12-.48.28-.23.15-.57.35-.77.44l-.9.41a12.74 12.74 0 0 1-5.5 1.08 18.75 18.75 0 0 1-2.95-.3C62.56 82.42 57.61 76.98 57 71.1c-.13-1.24-.14-10.28-.01-11.1a4.34 4.34 0 0 1 5.27-3.76"/>
    </svg>
  ),
  search: (props) => (
    <svg {...props} viewBox="0 0 16 16">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.14" d="M10.6 10.6a5.33 5.33 0 0 0-7.54-7.54 5.33 5.33 0 0 0 7.54 7.54l4 4"/>
    </svg>
  ),
};

export default Icon;
