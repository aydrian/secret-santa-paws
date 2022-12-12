import { FunctionComponent } from 'react';

interface Props {
  className?: string;
}

const SecretSantaPawsLogo: FunctionComponent<Props> = ({
  className,
}: Props) => {
  return (
    <>
      <span className='sr-only'>Secret Santa Paws</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 900 240'
        className={`fill-white mx-auto ${className}`}
      >
        <g>
          <g>
            <path
              d='M153.78,71.78c-0.62,0.54-0.93,1.46-0.96,2.78c-0.02,1.32,0.24,2.64,0.77,3.98
			c0.53,1.34,1.33,2.51,2.4,3.52c1.06,1.01,2.37,1.49,3.93,1.45c1-0.03,1.85-0.29,2.56-0.79c0.71-0.5,1.29-1.12,1.73-1.85
			c0.44-0.73,0.77-1.55,0.96-2.44c0.2-0.89,0.29-1.77,0.27-2.62c-0.03-1.22-0.29-2.23-0.77-3.04c-0.48-0.8-1.11-1.5-1.89-2.09
			c-0.78-0.59-1.66-1.09-2.65-1.49c-0.99-0.4-1.99-0.81-3-1.23c-0.94-0.35-2.06-0.79-3.37-1.33c-1.31-0.54-2.57-1.27-3.78-2.18
			c-1.21-0.91-2.25-2.05-3.12-3.42s-1.33-3.07-1.38-5.1c-0.03-1.33,0.28-2.69,0.95-4.08c0.67-1.39,1.63-2.66,2.9-3.83
			c1.27-1.16,2.81-2.12,4.62-2.87c1.81-0.75,3.87-1.16,6.17-1.22c2.26-0.06,4.1,0.1,5.51,0.47c1.42,0.37,2.52,0.87,3.32,1.5
			c0.79,0.63,1.34,1.32,1.64,2.07c0.3,0.75,0.45,1.46,0.47,2.13s-0.17,1.35-0.56,2.04c-0.39,0.7-0.85,1.34-1.4,1.93
			c-0.54,0.59-1.1,1.1-1.68,1.54c-0.58,0.44-1.06,0.74-1.42,0.9c0.17-0.49,0.34-1.16,0.5-2.01c0.16-0.86,0.09-1.71-0.2-2.55
			c-0.3-0.84-0.97-1.57-2-2.17c-1.04-0.6-2.68-0.88-4.94-0.82c-1.3,0.03-2.55,0.27-3.76,0.71c-1.21,0.44-2.28,1-3.21,1.67
			c-0.93,0.67-1.66,1.42-2.19,2.25c-0.53,0.83-0.79,1.67-0.77,2.52c0.02,0.82,0.33,1.56,0.92,2.23c0.59,0.67,1.39,1.3,2.38,1.88
			c1,0.59,2.14,1.16,3.43,1.72c1.29,0.56,2.65,1.12,4.07,1.67c1.38,0.56,2.75,1.16,4.1,1.81c1.35,0.65,2.56,1.41,3.64,2.27
			s1.95,1.84,2.6,2.93c0.66,1.09,1.01,2.36,1.04,3.81c0.04,1.56-0.21,3.05-0.75,4.49c-0.54,1.44-1.32,2.71-2.35,3.81
			c-1.03,1.1-2.29,2-3.79,2.68c-1.5,0.69-3.22,1.06-5.14,1.11c-1.7,0.04-3.32-0.19-4.85-0.71c-1.53-0.52-2.88-1.2-4.03-2.06
			c-1.15-0.86-2.08-1.82-2.77-2.87c-0.69-1.06-1.05-2.1-1.08-3.14c-0.03-1.11,0.2-2.06,0.68-2.85s1.08-1.43,1.81-1.91
			c0.73-0.48,1.49-0.82,2.28-1.03C152.44,71.74,153.15,71.68,153.78,71.78z'
            />
            <path
              d='M182.83,81.7c-2.59,0.07-4.61-0.75-6.07-2.46c-1.45-1.7-2.21-3.96-2.29-6.78
			c-0.05-1.96,0.19-3.81,0.72-5.55c0.53-1.74,1.26-3.25,2.19-4.53c0.93-1.28,2.02-2.3,3.28-3.06s2.59-1.15,4-1.19
			c1.37-0.04,2.55,0.43,3.54,1.38c0.99,0.96,1.51,2.34,1.55,4.16c0.03,1.19-0.2,2.37-0.69,3.55c-0.49,1.18-1.14,2.23-1.95,3.16
			c-0.81,0.93-1.71,1.68-2.69,2.26c-0.99,0.58-1.94,0.88-2.87,0.91c-0.59,0.02-1.09-0.05-1.51-0.18c-0.41-0.14-0.79-0.35-1.13-0.64
			c0.17,2.11,0.67,3.57,1.5,4.38c0.84,0.81,1.9,1.2,3.2,1.17c0.89-0.02,1.67-0.23,2.35-0.62c0.68-0.39,1.25-0.83,1.72-1.32
			c0.47-0.49,0.84-0.99,1.13-1.5c0.28-0.51,0.48-0.89,0.58-1.15c0.11-0.23,0.3-0.34,0.57-0.35s0.42,0.21,0.43,0.66
			c0.01,0.41-0.11,1.03-0.37,1.87s-0.69,1.69-1.3,2.53c-0.61,0.85-1.4,1.6-2.36,2.26C185.42,81.32,184.24,81.66,182.83,81.7z
			 M184.84,60.53c-0.22,0.01-0.63,0.25-1.23,0.73c-0.6,0.48-1.23,1.17-1.89,2.08c-0.66,0.91-1.26,1.99-1.81,3.24
			c-0.54,1.26-0.87,2.66-0.97,4.22c2.21-0.57,3.94-1.44,5.21-2.58c1.27-1.14,1.87-2.79,1.82-4.94c-0.03-1.07-0.18-1.8-0.45-2.18
			C185.25,60.71,185.02,60.52,184.84,60.53z'
            />
            <path
              d='M208.85,73.41c0.01,0.41-0.11,1.03-0.37,1.87c-0.26,0.84-0.69,1.69-1.3,2.53
			c-0.61,0.85-1.4,1.6-2.36,2.26c-0.97,0.65-2.15,1-3.56,1.04c-2,0.05-3.69-0.45-5.07-1.51c-1.38-1.06-2.37-2.6-2.98-4.62
			c-0.49-1.69-0.66-3.51-0.5-5.46c0.15-1.95,0.63-3.77,1.44-5.46c0.81-1.69,1.96-3.13,3.44-4.34c1.49-1.21,3.32-1.89,5.5-2.06
			c1.11-0.06,2.04,0.11,2.79,0.54c0.75,0.43,1.34,0.98,1.77,1.68c0.43,0.69,0.69,1.45,0.78,2.29c0.1,0.83,0.03,1.62-0.19,2.37
			c-0.22,0.75-0.58,1.38-1.06,1.89c-0.49,0.51-1.12,0.8-1.9,0.85c-0.78,0.09-1.42,0.01-1.92-0.26s-0.9-0.6-1.19-1
			c-0.29-0.4-0.49-0.82-0.59-1.26c-0.1-0.44-0.12-0.83-0.06-1.17c0.1-0.48,0.27-0.93,0.52-1.35c0.21-0.38,0.53-0.75,0.94-1.14
			c0.42-0.38,0.97-0.69,1.67-0.93c-0.11-0.07-0.23-0.11-0.34-0.1c-0.11,0-0.22-0.01-0.33-0.05c-0.15,0-0.26-0.01-0.33-0.05
			c-0.59,0.02-1.26,0.24-2.01,0.66c-0.75,0.43-1.45,1.09-2.12,2c-0.66,0.91-1.21,2.06-1.63,3.46c-0.43,1.4-0.61,3.08-0.56,5.04
			c0.02,0.85,0.14,1.69,0.34,2.52c0.21,0.83,0.51,1.56,0.92,2.2c0.41,0.64,0.9,1.14,1.48,1.52c0.58,0.37,1.26,0.55,2.04,0.53
			c0.89-0.02,1.67-0.24,2.35-0.64c0.67-0.41,1.25-0.87,1.71-1.41c0.47-0.53,0.83-1.06,1.1-1.58c0.26-0.52,0.45-0.92,0.55-1.18
			c0.11-0.23,0.3-0.34,0.57-0.35C208.69,72.75,208.83,72.97,208.85,73.41z'
            />
            <path
              d='M226.86,62.89c0.01,0.52-0.11,1.05-0.38,1.59c-0.26,0.54-0.59,1.06-0.99,1.55
			c-0.4,0.49-0.84,0.92-1.33,1.28c-0.49,0.37-0.96,0.59-1.4,0.68c0.27-1.15,0.34-2.05,0.21-2.67c-0.13-0.63-0.33-1.08-0.59-1.37
			c-0.31-0.33-0.68-0.5-1.13-0.53c-0.67,0.02-1.3,0.41-1.89,1.19c-0.59,0.78-1.09,1.71-1.51,2.82c-0.42,1.1-0.74,2.28-0.96,3.53
			c-0.23,1.25-0.33,2.37-0.3,3.37c-0.02,0.71,0.02,1.39,0.11,2.05c0.05,0.55,0.13,1.13,0.24,1.72c0.11,0.59,0.26,1.05,0.45,1.38
			c-0.22,0.19-0.57,0.42-1.07,0.69c-0.49,0.27-1.01,0.45-1.54,0.54c-0.54,0.09-1.02,0.01-1.45-0.24c-0.43-0.25-0.68-0.8-0.74-1.65
			c-0.1-0.81-0.17-1.73-0.21-2.75c-0.05-1.02-0.07-2.04-0.08-3.05c-0.01-1.02-0.01-2.03,0.01-3.03c0.01-1,0.04-1.93,0.09-2.78
			c0.03-1.63,0.04-2.89,0.01-3.78c-0.02-0.89-0.06-1.74-0.12-2.55c0-0.15,0.24-0.37,0.73-0.66c0.49-0.29,1.04-0.55,1.65-0.79
			c0.61-0.24,1.17-0.38,1.68-0.43c0.52-0.05,0.78,0.05,0.79,0.31c0.01,0.41-0.02,1.21-0.08,2.42c-0.06,1.21-0.15,2.46-0.26,3.76
			c0.24-0.71,0.56-1.48,0.97-2.3c0.4-0.82,0.88-1.6,1.41-2.32c0.54-0.72,1.15-1.32,1.84-1.8c0.69-0.48,1.46-0.73,2.31-0.75
			c0.67-0.02,1.22,0.17,1.65,0.57c0.44,0.4,0.79,0.85,1.06,1.36c0.27,0.51,0.47,1.03,0.6,1.54
			C226.79,62.3,226.85,62.66,226.86,62.89z'
            />
            <path
              d='M236.53,80.31c-2.59,0.07-4.61-0.75-6.07-2.46c-1.45-1.7-2.21-3.96-2.29-6.78
			c-0.05-1.96,0.19-3.81,0.72-5.55c0.53-1.74,1.26-3.25,2.19-4.53c0.93-1.28,2.02-2.3,3.28-3.06c1.26-0.75,2.59-1.15,4-1.19
			c1.37-0.04,2.55,0.43,3.54,1.38c0.99,0.96,1.51,2.34,1.55,4.16c0.03,1.19-0.2,2.37-0.69,3.55c-0.49,1.18-1.14,2.23-1.95,3.16
			c-0.81,0.93-1.71,1.68-2.69,2.26s-1.94,0.88-2.87,0.91c-0.59,0.02-1.09-0.05-1.51-0.18c-0.41-0.14-0.79-0.35-1.13-0.64
			c0.17,2.11,0.67,3.57,1.5,4.38c0.84,0.81,1.9,1.2,3.2,1.17c0.89-0.02,1.67-0.23,2.35-0.62c0.68-0.39,1.25-0.83,1.72-1.32
			c0.47-0.49,0.84-0.99,1.13-1.5c0.28-0.51,0.48-0.89,0.58-1.15c0.11-0.23,0.3-0.34,0.57-0.35c0.28-0.01,0.42,0.21,0.43,0.66
			c0.01,0.41-0.11,1.03-0.37,1.87s-0.69,1.69-1.3,2.53c-0.61,0.85-1.4,1.6-2.36,2.26C239.12,79.93,237.94,80.27,236.53,80.31z
			 M238.54,59.14c-0.22,0.01-0.63,0.25-1.23,0.73c-0.6,0.48-1.23,1.17-1.89,2.08c-0.66,0.91-1.26,1.99-1.81,3.24
			c-0.54,1.26-0.87,2.66-0.97,4.22c2.21-0.57,3.94-1.44,5.21-2.58c1.27-1.14,1.87-2.79,1.82-4.94c-0.03-1.07-0.18-1.8-0.45-2.18
			C238.95,59.32,238.73,59.13,238.54,59.14z'
            />
            <path
              d='M262.55,72.02c0.01,0.41-0.11,1.03-0.37,1.87c-0.26,0.84-0.69,1.69-1.3,2.53
			c-0.61,0.85-1.4,1.6-2.36,2.26c-0.97,0.65-2.15,1-3.56,1.04c-2,0.05-3.69-0.45-5.07-1.51c-1.38-1.06-2.37-2.6-2.98-4.62
			c-0.49-1.69-0.66-3.51-0.5-5.46c0.15-1.95,0.63-3.77,1.44-5.46c0.81-1.69,1.96-3.13,3.44-4.34c1.49-1.21,3.32-1.89,5.5-2.06
			c1.11-0.06,2.04,0.11,2.79,0.54c0.75,0.43,1.34,0.98,1.77,1.68c0.43,0.69,0.69,1.45,0.78,2.29c0.1,0.83,0.03,1.62-0.19,2.37
			c-0.22,0.75-0.58,1.38-1.06,1.89c-0.49,0.51-1.12,0.8-1.9,0.85c-0.78,0.09-1.42,0.01-1.92-0.26c-0.51-0.26-0.9-0.6-1.19-1
			c-0.29-0.4-0.49-0.82-0.59-1.26c-0.1-0.44-0.12-0.83-0.06-1.17c0.1-0.48,0.27-0.93,0.52-1.35c0.21-0.38,0.53-0.75,0.94-1.14
			c0.42-0.38,0.97-0.69,1.67-0.93c-0.11-0.07-0.23-0.11-0.34-0.1c-0.11,0-0.22-0.01-0.33-0.05c-0.15,0-0.26-0.01-0.33-0.05
			c-0.59,0.02-1.26,0.24-2.01,0.66c-0.75,0.43-1.45,1.09-2.12,2c-0.66,0.91-1.21,2.06-1.63,3.46c-0.43,1.4-0.61,3.08-0.56,5.04
			c0.02,0.85,0.14,1.69,0.34,2.52c0.21,0.83,0.51,1.56,0.92,2.2c0.41,0.64,0.9,1.14,1.48,1.52c0.58,0.37,1.26,0.55,2.04,0.53
			c0.89-0.02,1.67-0.24,2.35-0.64c0.67-0.41,1.25-0.87,1.71-1.41c0.47-0.53,0.83-1.06,1.1-1.58c0.26-0.52,0.45-0.92,0.55-1.18
			c0.11-0.23,0.3-0.34,0.57-0.35S262.54,71.58,262.55,72.02z'
            />
            <path
              d='M286.19,53.68c-0.41-0.06-0.96-0.12-1.64-0.18c-0.69-0.06-1.38-0.09-2.09-0.11
			c-0.82-0.02-1.69-0.01-2.61,0.01c-0.93-0.05-2.08-0.03-3.47,0.06s-2.84,0.16-4.36,0.2c-0.01,0.96-0.05,1.95-0.12,2.95
			c-0.07,1-0.13,1.99-0.17,2.95c-0.14,1.78-0.25,3.6-0.33,5.45c-0.08,1.86-0.1,3.61-0.06,5.28s0.18,3.17,0.42,4.52
			c0.24,1.35,0.65,2.4,1.22,3.16c-0.44,0.34-0.91,0.61-1.42,0.79c-0.51,0.18-0.97,0.31-1.38,0.4c-0.48,0.12-0.96,0.19-1.44,0.2
			c-0.44,0.01-0.82-0.13-1.12-0.42c-0.3-0.29-0.48-0.8-0.54-1.54c-0.11-1.26-0.15-2.52-0.13-3.8s0.06-2.62,0.12-4.03
			c0.06-1.41,0.12-2.92,0.19-4.53c0.07-1.61,0.13-3.38,0.2-5.31c0.06-2,0.06-3.95,0.02-5.84c-1.41,0.07-2.59,0.12-3.55,0.15
			s-1.5,0.02-1.61-0.01c-0.11-0.07-0.25-0.23-0.4-0.49c-0.15-0.22-0.36-0.55-0.61-0.98c-0.25-0.44-0.57-1.06-0.97-1.86
			c0.7-0.02,1.47-0.04,2.3-0.06c0.83-0.02,1.6-0.06,2.3-0.12c0.81-0.06,1.63-0.12,2.44-0.17c-0.05-0.59-0.09-1.22-0.1-1.89
			c-0.05-0.52-0.08-1.1-0.1-1.75c-0.02-0.65-0.05-1.25-0.1-1.8c-0.01-0.22,0.26-0.5,0.78-0.83c0.53-0.33,1.1-0.63,1.73-0.91
			c0.62-0.27,1.2-0.46,1.74-0.55c0.53-0.09,0.81,0.03,0.82,0.37c0.01,0.33,0.02,1.14,0.03,2.42c0.01,1.28,0.01,2.83-0.02,4.64
			c0.37-0.01,0.65-0.03,0.83-0.08c1.96-0.12,3.54-0.25,4.74-0.37c1.2-0.12,2.19-0.16,2.97-0.1c0.78,0.05,1.47,0.22,2.07,0.5
			c0.6,0.28,1.28,0.74,2.04,1.39c0.26,0.22,0.49,0.45,0.69,0.7c0.19,0.22,0.35,0.46,0.49,0.74
			C286.11,53.1,286.19,53.39,286.19,53.68z'
            />
          </g>
          <path
            d='M47.94,149.28c-2.66,2.19-4.11,6.07-4.34,11.62c-0.23,5.56,0.7,11.19,2.82,16.9
		c2.11,5.71,5.36,10.76,9.74,15.14c4.38,4.38,9.86,6.57,16.43,6.57c4.22,0,7.86-1.02,10.91-3.05c3.05-2.03,5.55-4.58,7.51-7.63
		c1.95-3.05,3.4-6.45,4.34-10.21c0.94-3.76,1.41-7.43,1.41-11.03c0-5.16-0.98-9.46-2.93-12.91c-1.96-3.44-4.54-6.45-7.75-9.04
		c-3.21-2.58-6.89-4.77-11.03-6.57c-4.15-1.8-8.33-3.64-12.56-5.52c-3.91-1.56-8.61-3.56-14.08-5.99
		c-5.48-2.42-10.72-5.63-15.73-9.62c-5.01-3.99-9.27-8.92-12.79-14.79c-3.52-5.87-5.28-13.1-5.28-21.71
		c0-5.63,1.48-11.34,4.46-17.13c2.97-5.79,7.19-11.07,12.67-15.84c5.47-4.77,12.09-8.64,19.83-11.62
		c7.75-2.97,16.47-4.46,26.17-4.46c9.54,0,17.29,0.86,23.24,2.58c5.94,1.72,10.56,3.95,13.85,6.69c3.29,2.74,5.52,5.71,6.69,8.92
		c1.17,3.21,1.76,6.22,1.76,9.04s-0.86,5.68-2.58,8.57c-1.72,2.9-3.76,5.56-6.1,7.98c-2.35,2.43-4.78,4.54-7.28,6.34
		c-2.51,1.8-4.54,3.02-6.1,3.64c0.78-2.03,1.56-4.85,2.35-8.45c0.78-3.6,0.59-7.19-0.59-10.8c-1.17-3.6-3.91-6.73-8.21-9.39
		c-4.31-2.66-11.23-3.99-20.77-3.99c-5.48,0-10.8,0.86-15.96,2.58c-5.16,1.72-9.74,3.95-13.73,6.69c-3.99,2.74-7.16,5.83-9.51,9.27
		c-2.35,3.45-3.52,6.97-3.52,10.56c0,3.45,1.21,6.61,3.64,9.51c2.42,2.9,5.71,5.63,9.86,8.21c4.14,2.58,8.92,5.13,14.32,7.63
		c5.4,2.51,11.07,5.01,17.02,7.51c5.79,2.51,11.5,5.21,17.13,8.1c5.63,2.9,10.68,6.22,15.14,9.98c4.46,3.76,8.02,7.98,10.68,12.67
		c2.66,4.69,3.99,10.09,3.99,16.2c0,6.57-1.21,12.87-3.64,18.89c-2.43,6.03-5.87,11.3-10.33,15.84c-4.46,4.54-9.9,8.18-16.31,10.91
		c-6.42,2.74-13.69,4.11-21.83,4.11c-7.2,0-14.01-1.17-20.42-3.52c-6.42-2.35-12.01-5.4-16.78-9.15c-4.78-3.76-8.57-7.9-11.38-12.44
		c-2.82-4.53-4.22-8.99-4.22-13.38c0-4.69,1.06-8.68,3.17-11.97s4.73-5.9,7.86-7.86c3.13-1.95,6.37-3.32,9.74-4.11
		C42.26,148.97,45.28,148.81,47.94,149.28z'
          />
          <path
            d='M205.9,179.79c0.31,1.1,0.78,2.11,1.41,3.05c0.47,0.79,1.13,1.53,2,2.23
		c0.86,0.7,1.91,1.14,3.17,1.29c-1.1,2.19-2.19,3.68-3.29,4.46c-0.63,0.47-1.17,0.79-1.64,0.94c-1.41,0.47-3.52,0.7-6.34,0.7
		c-2.82,0-5.56-0.86-8.21-2.58c-0.94-0.78-1.8-1.95-2.58-3.52c-0.79-1.25-1.45-3.01-2-5.28c-0.55-2.27-0.98-5.2-1.29-8.8
		c-2.19,4.69-4.66,8.41-7.39,11.15c-2.74,2.74-5.44,4.74-8.1,5.99c-2.97,1.72-6.03,2.74-9.15,3.05c-3.91,0.31-7.63-0.35-11.15-2
		c-3.52-1.64-6.5-4.14-8.92-7.51c-2.43-3.36-4.27-7.47-5.52-12.32c-1.26-4.85-1.64-10.33-1.17-16.43
		c0.47-6.41,1.72-12.12,3.76-17.13c2.03-5,4.46-9.46,7.28-13.38c2.82-3.91,5.79-7.23,8.92-9.98c3.13-2.74,6.14-5,9.04-6.81
		c2.89-1.8,5.4-3.13,7.51-3.99c2.11-0.86,3.48-1.37,4.11-1.53c1.72-0.47,3.2-0.62,4.46-0.47c1.25,0.16,2.35,0.86,3.29,2.11
		c0.31,0.47,0.7,1.02,1.17,1.64c0.31,0.63,0.7,1.45,1.17,2.46c0.47,1.02,0.86,2.15,1.17,3.4c-3.76,1.72-7.28,3.64-10.56,5.75
		s-6.3,4.66-9.04,7.63c-2.74,2.98-5.13,6.57-7.16,10.8c-2.04,4.22-3.6,9.39-4.69,15.49c-1.57,7.67-1.14,13.85,1.29,18.54
		c2.42,4.69,5.75,6.65,9.98,5.87c2.5-0.78,4.93-2.27,7.28-4.46c2.03-1.88,4.18-4.69,6.45-8.45c2.27-3.76,4.42-8.92,6.45-15.49
		c0.78-9.39,1.44-16.78,2-22.18c0.55-5.4,1.06-9.51,1.53-12.32c0.62-3.29,1.09-5.47,1.41-6.57c0.47-0.78,1.41-1.53,2.82-2.23
		c1.41-0.7,2.97-1.29,4.69-1.76c1.72-0.47,3.29-0.74,4.69-0.82c1.41-0.07,2.35-0.04,2.82,0.12c0.31,0.16,0.47,2.08,0.47,5.75
		c0,3.68-0.12,8.3-0.35,13.85c-0.23,5.56-0.51,11.58-0.82,18.07c-0.32,6.5-0.59,12.64-0.82,18.42c-0.23,5.79-0.39,10.84-0.47,15.14
		C205.47,176,205.58,178.7,205.9,179.79z'
          />
          <path
            d='M250.5,185.42c-0.16,0.94-0.98,1.92-2.46,2.93c-1.49,1.02-3.21,1.92-5.16,2.7
		c-1.96,0.78-3.8,1.29-5.52,1.53c-1.72,0.23-2.9,0.04-3.52-0.59c-0.63-0.62-1.64-1.8-3.05-3.52c-1.41-1.72-2.27-4.53-2.58-8.45
		c-0.32-4.07-0.47-9.19-0.47-15.37c0-6.18-0.08-13.03-0.23-20.54v-9.39c0-2.82-0.04-6.1-0.12-9.86c-0.08-3.76-0.2-7.66-0.35-11.74
		c1.41-0.78,2.85-1.53,4.34-2.23c1.48-0.7,2.85-1.29,4.11-1.76c1.41-0.62,2.74-1.09,3.99-1.41c3.29-0.94,5.79-1.48,7.51-1.64
		c1.72-0.15,2.74,0.39,3.05,1.64c0.15,0.94,0.08,3.21-0.23,6.81c-0.32,3.13-0.7,7.86-1.17,14.2c-0.47,6.34-1.26,15.14-2.35,26.41
		c2.03-5,3.71-9.31,5.05-12.91c1.33-3.6,2.46-6.49,3.4-8.68c0.94-2.66,1.8-4.77,2.58-6.34c0.78-2.03,1.8-4.3,3.05-6.81
		c1.25-2.5,2.54-4.85,3.87-7.04c1.33-2.19,2.58-4.14,3.76-5.87c1.17-1.72,2.07-2.74,2.7-3.05c0.47-0.31,1.88-0.31,4.22,0
		c2.35,0.32,4.85,1.06,7.51,2.23c2.66,1.17,5.24,2.82,7.75,4.93c2.5,2.11,4.14,4.66,4.93,7.63c0.94,3.45,1.29,7.98,1.06,13.61
		c-0.23,5.63-0.63,11.43-1.17,17.37c-0.55,5.95-0.98,11.58-1.29,16.9c-0.32,5.32,0,9.39,0.94,12.21c0.31,1.57,0.78,2.98,1.41,4.22
		c0.31,1.26,0.74,2.39,1.29,3.4c0.55,1.02,1.13,1.76,1.76,2.23c-3.76,1.72-6.81,2.97-9.15,3.76c-2.35,0.78-4.15,1.33-5.4,1.64
		c-1.57,0.47-2.66,0.62-3.29,0.47c-1.41-0.47-2.62-1.64-3.64-3.52c-1.02-1.88-1.92-4.85-2.7-8.92c-0.32-1.25-0.43-3.32-0.35-6.22
		c0.08-2.89,0.27-6.18,0.59-9.86c0.31-3.67,0.66-7.51,1.06-11.5c0.39-3.99,0.7-7.75,0.94-11.27s0.43-6.57,0.59-9.15
		c0.15-2.58,0.15-4.34,0-5.28c-0.79-2.82-1.88-4.81-3.29-5.99s-2.51-1.29-3.29-0.35c-2.04,2.35-4.19,6.14-6.45,11.38
		c-2.27,5.25-4.42,10.96-6.45,17.13c-2.04,6.18-3.76,12.32-5.16,18.42C251.67,176.04,250.81,181.2,250.5,185.42z'
          />
          <path
            d='M400.95,87.32c-1.72-0.31-4.03-0.62-6.92-0.94c-2.9-0.31-5.83-0.54-8.8-0.7
		c-3.44-0.15-7.12-0.23-11.03-0.23c-3.91-0.31-8.8-0.35-14.67-0.12c-5.87,0.23-12.01,0.35-18.42,0.35
		c-0.16,4.07-0.43,8.21-0.82,12.44c-0.39,4.22-0.74,8.37-1.06,12.44c-0.79,7.51-1.45,15.18-2,23c-0.55,7.83-0.82,15.26-0.82,22.3
		s0.43,13.42,1.29,19.13c0.86,5.71,2.46,10.21,4.81,13.5c-1.88,1.41-3.91,2.46-6.1,3.17c-2.19,0.7-4.15,1.21-5.87,1.53
		c-2.04,0.47-4.07,0.7-6.1,0.7c-1.88,0-3.44-0.63-4.69-1.88c-1.26-1.25-1.96-3.44-2.11-6.57c-0.32-5.32-0.35-10.68-0.12-16.08
		c0.23-5.4,0.55-11.07,0.94-17.02c0.39-5.94,0.82-12.32,1.29-19.13c0.47-6.81,0.94-14.28,1.41-22.41c0.47-8.45,0.7-16.66,0.7-24.64
		c-5.95,0.16-10.95,0.23-15.02,0.23s-6.34-0.07-6.81-0.23c-0.47-0.31-1.02-1.01-1.64-2.11c-0.62-0.94-1.44-2.35-2.46-4.22
		c-1.02-1.88-2.31-4.53-3.87-7.98c2.97,0,6.22,0,9.74,0c3.52,0,6.77-0.07,9.74-0.23c3.44-0.15,6.88-0.31,10.33-0.47
		c-0.16-2.5-0.23-5.16-0.23-7.98c-0.16-2.19-0.23-4.65-0.23-7.39c0-2.74-0.08-5.28-0.23-7.63c0-0.94,1.13-2.07,3.4-3.4
		c2.27-1.33,4.73-2.54,7.39-3.64c2.66-1.09,5.12-1.8,7.39-2.11c2.27-0.31,3.4,0.23,3.4,1.64c0,1.41-0.04,4.81-0.12,10.21
		c-0.08,5.4-0.28,11.93-0.59,19.6c1.56,0,2.74-0.07,3.52-0.23c8.29-0.31,14.98-0.66,20.07-1.06c5.08-0.39,9.27-0.43,12.56-0.12
		c3.29,0.32,6.18,1.1,8.68,2.35c2.5,1.26,5.32,3.29,8.45,6.1c1.09,0.94,2.03,1.96,2.82,3.05c0.78,0.94,1.44,2,2,3.17
		C400.67,84.85,400.95,86.07,400.95,87.32z'
          />
          <path
            d='M429.35,179.79c0.31,1.1,0.78,2.11,1.41,3.05c0.47,0.79,1.13,1.53,2,2.23
		c0.86,0.7,1.91,1.14,3.17,1.29c-1.1,2.19-2.19,3.68-3.29,4.46c-0.63,0.47-1.17,0.79-1.64,0.94c-1.41,0.47-3.52,0.7-6.34,0.7
		c-2.82,0-5.56-0.86-8.21-2.58c-0.94-0.78-1.8-1.95-2.58-3.52c-0.79-1.25-1.45-3.01-2-5.28c-0.55-2.27-0.98-5.2-1.29-8.8
		c-2.19,4.69-4.66,8.41-7.39,11.15c-2.74,2.74-5.44,4.74-8.1,5.99c-2.97,1.72-6.03,2.74-9.15,3.05c-3.91,0.31-7.63-0.35-11.15-2
		c-3.52-1.64-6.5-4.14-8.92-7.51c-2.43-3.36-4.27-7.47-5.52-12.32c-1.26-4.85-1.64-10.33-1.17-16.43
		c0.47-6.41,1.72-12.12,3.76-17.13c2.03-5,4.46-9.46,7.28-13.38c2.82-3.91,5.79-7.23,8.92-9.98c3.13-2.74,6.14-5,9.04-6.81
		c2.89-1.8,5.4-3.13,7.51-3.99c2.11-0.86,3.48-1.37,4.11-1.53c1.72-0.47,3.2-0.62,4.46-0.47c1.25,0.16,2.35,0.86,3.29,2.11
		c0.31,0.47,0.7,1.02,1.17,1.64c0.31,0.63,0.7,1.45,1.17,2.46c0.47,1.02,0.86,2.15,1.17,3.4c-3.76,1.72-7.28,3.64-10.56,5.75
		c-3.29,2.11-6.3,4.66-9.04,7.63c-2.74,2.98-5.13,6.57-7.16,10.8c-2.04,4.22-3.6,9.39-4.69,15.49c-1.57,7.67-1.14,13.85,1.29,18.54
		c2.42,4.69,5.75,6.65,9.98,5.87c2.5-0.78,4.93-2.27,7.28-4.46c2.03-1.88,4.18-4.69,6.45-8.45c2.27-3.76,4.42-8.92,6.45-15.49
		c0.78-9.39,1.44-16.78,2-22.18c0.55-5.4,1.06-9.51,1.53-12.32c0.62-3.29,1.09-5.47,1.41-6.57c0.47-0.78,1.41-1.53,2.82-2.23
		c1.41-0.7,2.97-1.29,4.69-1.76c1.72-0.47,3.29-0.74,4.69-0.82c1.41-0.07,2.35-0.04,2.82,0.12c0.31,0.16,0.47,2.08,0.47,5.75
		c0,3.68-0.12,8.3-0.35,13.85c-0.23,5.56-0.51,11.58-0.82,18.07c-0.32,6.5-0.59,12.64-0.82,18.42c-0.23,5.79-0.39,10.84-0.47,15.14
		C428.91,176,429.03,178.7,429.35,179.79z'
          />
          <path
            d='M551.63,31.45c5.94,0,12.12,0.94,18.54,2.82c6.41,1.88,12.32,4.89,17.72,9.04
		c5.4,4.15,9.82,9.55,13.26,16.2c3.44,6.65,5.16,14.75,5.16,24.29c0,8.61-1.61,16.98-4.81,25.11c-3.21,8.14-7.75,15.57-13.61,22.3
		c-5.87,6.73-12.95,12.48-21.24,17.25c-8.3,4.78-17.53,8.02-27.7,9.74c0,6.42,0.23,11.97,0.7,16.66c0.15,4.38,0.35,8.1,0.59,11.15
		c0.23,3.05,0.47,5.68,0.7,7.86c0.23,2.19,0.51,4.19,0.82,5.99c0.31,1.8,0.7,3.56,1.17,5.28c-3.13,2.35-6.1,4.07-8.92,5.16
		c-2.82,1.09-5.32,1.88-7.51,2.35c-2.51,0.62-4.85,0.78-7.04,0.47c-0.79-2.03-1.49-4.26-2.11-6.69c-0.63-2.43-1.06-5.6-1.29-9.51
		c-0.23-3.91-0.35-8.88-0.35-14.9c0-6.02,0.15-13.73,0.47-23.12c-1.26-0.15-2.58-0.27-3.99-0.35c-1.41-0.07-2.74-0.27-3.99-0.59
		c-1.1-2.5-1.8-4.69-2.11-6.57c-0.32-1.88-0.47-3.44-0.47-4.69c0-1.56,0.15-2.82,0.47-3.76c1.25,0.16,2.5,0.28,3.76,0.35
		c1.25,0.08,2.42,0.12,3.52,0.12c1.25,0.16,2.42,0.23,3.52,0.23c0.31-7.19,0.66-14.67,1.06-22.41c0.39-7.75,0.7-15.29,0.94-22.65
		c0.23-7.35,0.47-14.43,0.7-21.24c0.23-6.81,0.43-12.87,0.59-18.19c-4.69,3.13-8.8,7.2-12.32,12.21c-3.52,5.01-5.83,10.8-6.92,17.37
		c-2.04-0.31-3.76-1.29-5.16-2.93s-2.58-3.32-3.52-5.05c-1.09-2.03-2.03-4.3-2.82-6.81c-0.78-2.97-0.82-5.99-0.12-9.04
		c0.7-3.05,1.84-5.94,3.4-8.68c1.56-2.74,3.36-5.16,5.4-7.28c2.03-2.11,3.99-3.79,5.87-5.05c3.44-2.03,6.88-3.87,10.33-5.52
		c3.44-1.64,7.35-3.01,11.74-4.11c1.72-1.72,3.64-3.29,5.75-4.69c2.11-1.41,4.18-2.27,6.22-2.58c2.5-0.62,3.91,1.02,4.22,4.93
		c1.41-0.15,2.89-0.27,4.46-0.35C548.26,31.5,549.91,31.45,551.63,31.45z M538.96,140.59c4.22-1.25,8.84-3.13,13.85-5.63
		c5.01-2.5,9.7-5.83,14.08-9.98c4.38-4.14,8.06-9.27,11.03-15.37c2.97-6.1,4.46-13.45,4.46-22.06c0-6.57-1.14-12.16-3.4-16.78
		c-2.27-4.61-5.2-8.37-8.8-11.27c-3.6-2.89-7.55-5-11.85-6.34c-4.31-1.33-8.57-2-12.79-2c-0.79,0-1.57,0-2.35,0
		c-0.79,0-1.57,0.08-2.35,0.23c-0.47,5.01-0.7,10.41-0.7,16.2c0,3.92-0.08,8.65-0.23,14.2c-0.16,5.56-0.32,11.54-0.47,17.96
		c-0.16,6.42-0.28,13.14-0.35,20.19C538.99,126.98,538.96,133.87,538.96,140.59z'
          />
          <path
            d='M802.07,99.05c7.51,0,10.48,4.78,8.92,14.32c-0.63,4.07-1.72,9.55-3.29,16.43
		c-1.57,6.89-3.52,14.05-5.87,21.48c-2.35,7.44-5.05,14.67-8.1,21.71s-6.38,12.83-9.98,17.37c-3.29,1.56-6.1,2.5-8.45,2.82
		c-1.26,0.31-2.35,0.39-3.29,0.23c-1.26,0-2.43-0.16-3.52-0.47c-1.1-0.32-2.15-0.94-3.17-1.88c-1.02-0.94-1.96-2.35-2.82-4.22
		c-0.86-1.88-1.53-4.46-2-7.75c-0.79-4.85-1.92-10.09-3.4-15.73c-1.49-5.63-3.02-10.8-4.58-15.49c-1.41,4.22-2.86,8.49-4.34,12.79
		c-1.49,4.31-2.97,8.33-4.46,12.09c-1.49,3.76-2.93,7.12-4.34,10.09c-1.41,2.98-2.74,5.25-3.99,6.81
		c-5.16,2.35-8.92,3.76-11.27,4.22c-1.41,0.47-2.58,0.62-3.52,0.47c-3.13-4.07-5.87-8.41-8.21-13.03
		c-2.35-4.61-4.22-8.95-5.63-13.03c-1.72-4.69-3.13-9.39-4.22-14.08c-1.26-5.94-2.11-11.65-2.58-17.13
		c-0.47-5.47-0.9-10.52-1.29-15.14c-0.39-4.61-0.86-8.64-1.41-12.09c-0.55-3.44-1.53-6.18-2.93-8.21c1.41-1.09,3.05-2.15,4.93-3.17
		c1.88-1.01,3.83-1.64,5.87-1.88c2.03-0.23,4.11-0.07,6.22,0.47c2.11,0.55,4.18,1.76,6.22,3.64c0.31,4.07,0.55,8.02,0.7,11.85
		c0.15,3.84,0.31,7.32,0.47,10.44c0.15,3.6,0.23,6.97,0.23,10.09c0.15,3.92,0.35,8.06,0.59,12.44c0.23,4.38,0.59,8.68,1.06,12.91
		c0.47,4.22,1.21,8.18,2.23,11.85c1.02,3.68,2.38,6.77,4.11,9.27c1.72-2.82,4.14-7.47,7.28-13.97c3.13-6.49,5.71-14.67,7.75-24.53
		c0.78-4.07,1.29-8.13,1.53-12.21c0.23-4.07,0.23-7.78,0-11.15c-0.23-3.36-0.55-6.34-0.94-8.92c-0.39-2.58-0.82-4.42-1.29-5.52
		c1.25-0.78,2.58-1.37,3.99-1.76c1.41-0.39,2.74-0.74,3.99-1.06c1.41-0.31,2.74-0.47,3.99-0.47c4.07-0.31,6.84,0.43,8.33,2.23
		c1.48,1.8,1.84,5.13,1.06,9.98c-0.16,1.26-0.55,3.17-1.17,5.75c-0.63,2.58-1.41,5.68-2.35,9.27c0.94,3.13,2.03,7.08,3.29,11.85
		c1.25,4.78,2.5,9.43,3.76,13.97c0.94,4.38,1.88,8.84,2.82,13.38c0.94,4.54,1.72,8.53,2.35,11.97c0.78-0.15,1.56-0.47,2.35-0.94
		c0.78-0.47,1.48-1.33,2.11-2.58c0.62-1.09,1.48-2.89,2.58-5.4c1.09-2.5,2.27-5.55,3.52-9.15c1.25-3.6,2.46-7.59,3.64-11.97
		c1.17-4.38,2.23-9.07,3.17-14.08c1.72-10.01,2.38-17.29,1.99-21.83c-0.39-4.53-1.29-7.59-2.7-9.15c1.56-1.09,3.17-1.91,4.81-2.46
		c1.64-0.54,3.17-0.97,4.58-1.29C799.09,99.21,800.66,99.05,802.07,99.05z'
          />
          <path
            d='M859.57,147.17c3.44,1.26,6.73,2.43,9.86,3.52c3.13,1.1,5.87,2.43,8.21,3.99
		c2.35,1.57,4.22,3.4,5.63,5.52c1.41,2.11,2.11,4.74,2.11,7.86c0,3.76-0.82,7.28-2.46,10.56c-1.64,3.29-4.03,6.18-7.16,8.68
		c-3.13,2.51-6.92,4.5-11.38,5.99c-4.46,1.49-9.43,2.23-14.9,2.23c-6.1,0-11.03-0.59-14.79-1.76c-3.76-1.17-6.65-2.54-8.68-4.11
		c-2.04-1.56-3.37-3.13-3.99-4.69c-0.63-1.56-0.94-2.82-0.94-3.76c0-1.88,0.39-3.95,1.17-6.22c0.78-2.27,2.27-4.73,4.46-7.39
		c0.94-1.09,1.95-2.11,3.05-3.05c2.19-1.88,4.38-3.05,6.57-3.52c-0.32,3.6,0.12,6.54,1.29,8.8c1.17,2.27,2.74,4.03,4.69,5.28
		c1.95,1.26,4.14,2.11,6.57,2.58c2.42,0.47,4.73,0.7,6.92,0.7c2.19,0,4.42-0.31,6.69-0.94c2.27-0.62,4.34-1.44,6.22-2.46
		c1.88-1.01,3.4-2.19,4.58-3.52c1.17-1.33,1.76-2.77,1.76-4.34c0-1.72-0.7-3.13-2.11-4.22c-1.41-1.09-3.17-2-5.28-2.7
		c-2.11-0.7-4.38-1.25-6.81-1.64c-2.43-0.39-4.73-0.82-6.92-1.29c-2.19-0.47-5.13-1.13-8.8-2c-3.68-0.86-7.28-2.23-10.8-4.11
		c-3.52-1.88-6.57-4.38-9.15-7.51c-2.58-3.13-3.87-7.28-3.87-12.44c0-5.94,1.53-11.15,4.58-15.61c3.05-4.46,6.81-8.21,11.27-11.27
		s9.19-5.36,14.2-6.92c5.01-1.56,9.47-2.35,13.38-2.35c2.03,0,4.22,0.28,6.57,0.82c2.35,0.55,4.54,1.49,6.57,2.82
		c2.03,1.33,3.71,3.09,5.05,5.28c1.33,2.19,2,5.01,2,8.45c0,3.45-0.28,6.22-0.82,8.33c-0.55,2.11-1.33,3.76-2.35,4.93
		c-1.02,1.17-2.23,1.92-3.64,2.23c-1.41,0.32-3.05,0.47-4.93,0.47c-1.26,0-2.43-0.15-3.52-0.47c-0.94-0.31-1.96-0.62-3.05-0.94
		c-1.1-0.31-2.11-0.86-3.05-1.64c1.56-1.88,2.78-3.67,3.64-5.4c0.86-1.72,1.29-3.83,1.29-6.34c0-2.19-0.59-4.14-1.76-5.87
		c-1.17-1.72-3.09-2.58-5.75-2.58c-2.82,0-5.52,0.55-8.1,1.64c-2.58,1.1-4.85,2.58-6.81,4.46c-1.96,1.88-3.52,4.03-4.69,6.45
		c-1.17,2.43-1.76,5.05-1.76,7.86c0,4.22,1.6,8.21,4.81,11.97C847.64,141.3,852.68,144.51,859.57,147.17z'
          />
          <path
            className='fill-red-200'
            d='M667.19,151.95c-1.5,1.33-3,2.66-4.5,3.99c-1.78,1.58-3.64,3.07-5.3,4.77
		c-2.47,2.52-3.77,5.75-5.05,8.99c-0.66,1.68-1.45,3.34-2.4,4.87c-2.63,4.21-7.7,5.68-12.26,3.65c-3.36-1.5-5.35-4.07-5.79-7.75
		c-0.63-5.32-1.26-10.64-1.83-15.96c-0.78-7.3,4.13-13.85,11.35-15.14c5.27-0.94,10.55-1.84,15.84-2.71c3.92-0.65,7.1,0.72,9.4,3.87
		c2.3,3.15,2.76,6.6,1.05,10.21c-0.18,0.38-0.42,0.72-0.63,1.08C667.11,151.85,667.15,151.9,667.19,151.95z'
          />
          <path
            className='fill-red-100'
            d='M618.96,137.1c1.94,1.52,3.82,3.88,4.59,7c1.11,4.55-1.62,8.21-6.3,8.4
		c-3.62,0.15-6.71-1.22-9.41-3.54c-1.71-1.47-3.14-3.19-3.97-5.31c-1.02-2.6-1.07-5.14,0.75-7.45c1.39-1.76,3.32-2.46,5.5-2.51
		C612.76,133.63,615.86,134.76,618.96,137.1z'
          />
          <path
            className='fill-red-100'
            d='M620.91,133.07c-1.9-1.52-3.59-3.35-4.61-5.71c-0.86-1.99-1.13-4.04-0.26-6.08
		c1.12-2.65,3.29-3.87,6.07-4.06c2.38-0.16,4.55,0.57,6.62,1.69c3.23,1.74,5.66,4.23,6.89,7.73c0.9,2.57,0.87,5.09-1.08,7.26
		c-1.57,1.74-3.65,2.22-5.89,2.13C625.78,135.91,623.27,134.82,620.91,133.07z'
          />
          <path
            className='fill-red-100'
            d='M620.24,160.5c1.25,0.98,2.36,2.08,3.15,3.47c2.17,3.81,0.31,7.76-4.02,8.46
		c-2.88,0.47-5.56-0.24-8.11-1.5c-2.24-1.1-4.17-2.58-5.44-4.79c-2.07-3.59-0.44-7.4,3.6-8.3c3.25-0.73,6.27,0.04,9.13,1.62
		C619.13,159.78,619.68,160.15,620.24,160.5z'
          />
          <path
            className='fill-red-100'
            d='M644.33,128.14c-2.53-1.97-4.57-4.61-5.3-8.09c-0.21-0.99-0.25-2.06-0.11-3.06
		c0.37-2.65,2.43-4.34,5.11-4.35c1.86-0.01,3.53,0.62,5.05,1.61c3.04,1.99,5.19,4.7,6.23,8.2c0.26,0.88,0.36,1.85,0.31,2.76
		c-0.17,3.52-2.93,5.71-6.42,5.19C647.46,130.15,645.95,129.36,644.33,128.14z'
          />
          <path
            className='fill-red-200'
            d='M685.09,89.57c-2,0.05-4.01,0.09-6.01,0.15c-2.38,0.06-4.76,0.01-7.12,0.23
		c-3.52,0.33-6.59,1.97-9.65,3.62c-1.59,0.86-3.26,1.62-4.97,2.18c-4.72,1.53-9.55-0.62-11.72-5.11c-1.6-3.31-1.47-6.56,0.57-9.66
		c2.95-4.47,5.89-8.94,8.89-13.39c4.1-6.09,12.08-7.93,18.43-4.26c4.64,2.68,9.25,5.4,13.86,8.13c3.41,2.03,4.96,5.12,4.69,9.02
		c-0.27,3.89-2.15,6.82-5.78,8.48c-0.38,0.17-0.79,0.28-1.18,0.42C685.09,89.44,685.09,89.51,685.09,89.57z'
          />
          <path
            className='fill-red-100'
            d='M657.78,47.14c0.5,2.41,0.42,5.43-1,8.31c-2.08,4.19-6.53,5.23-10.23,2.36
          c-2.86-2.22-4.35-5.26-4.92-8.77c-0.36-2.23-0.35-4.46,0.39-6.62c0.89-2.65,2.5-4.62,5.37-5.22c2.2-0.45,4.12,0.25,5.83,1.62
          C655.28,40.48,656.92,43.35,657.78,47.14z'
          />
          <path
            className='fill-red-100'
            d='M661.86,45.31c-0.47-2.39-0.59-4.87,0.16-7.33c0.63-2.07,1.75-3.82,3.72-4.82
          c2.57-1.31,5.01-0.84,7.26,0.81c1.92,1.41,3.11,3.37,3.97,5.55c1.35,3.41,1.6,6.88,0.29,10.35c-0.97,2.55-2.62,4.45-5.5,4.85
          c-2.32,0.32-4.22-0.65-5.88-2.16C663.76,50.62,662.54,48.16,661.86,45.31z'
          />
          <path
            className='fill-red-100'
            d='M643.68,65.85c0.33,1.55,0.46,3.11,0.17,4.68c-0.8,4.32-4.76,6.13-8.53,3.88
          c-2.5-1.49-4.1-3.76-5.24-6.37c-1-2.29-1.52-4.66-1.08-7.17c0.73-4.08,4.43-5.94,8.11-4.03c2.95,1.54,4.77,4.07,5.94,7.12
          C643.29,64.58,643.47,65.22,643.68,65.85z'
          />
          <path
            className='fill-red-100'
            d='M682.95,56.64c-0.66-3.14-0.52-6.47,1.16-9.6c0.48-0.89,1.14-1.74,1.89-2.41
		c1.99-1.79,4.66-1.76,6.71-0.03c1.42,1.19,2.3,2.75,2.82,4.49c1.04,3.48,0.94,6.94-0.52,10.29c-0.37,0.84-0.91,1.64-1.54,2.31
		c-2.4,2.58-5.92,2.48-8.26-0.17C684.05,60.19,683.41,58.61,682.95,56.64z'
          />
        </g>
      </svg>
    </>
  );
};

export default SecretSantaPawsLogo;