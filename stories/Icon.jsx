import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ fill, size }) {
  return (
    <svg
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M0 0H24V24H0z"
          transform="translate(-541 -993) translate(400 993) translate(141)"
        />
        <path
          fill={fill}
          d="M15.253 5.55c.186 0 .334.15.334.336v10.566c0 .186-.148.337-.334.337h-2.804c-.186 0-.336-.15-.336-.337v-4.86c-1.537 2.766-4.16 4.82-7.325 5.61-.88.22-1.772.335-2.658.348l-.175-.003v-3.472c.664 0 1.331-.081 1.99-.246 2.54-.634 4.58-2.427 5.552-4.803H5.269c-.183 0-.334-.15-.334-.336V5.886c0-.185.15-.336.334-.336h9.984z"
          transform="translate(-541 -993) translate(400 993) translate(141)"
        />
      </g>
    </svg>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  fill: 'red',
  size: 64,
};
