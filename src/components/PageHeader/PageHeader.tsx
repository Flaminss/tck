import classes from './PageHeader.module.scss';

function PageHeader({ title }: { title: string }) {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <span className={classes.text}>{title}</span>
        <svg
          viewBox='0 0 171 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={classes.svg}
        >
          <path
            d='M38.5092 5.20481L4.81905 5.24577C3.50004 5.24737 2.21732 5.67791 1.16445 6.47243C0.169295 7.03583 0.123744 8.43749 1.14088 8.96018C2.12711 9.46699 3.17437 9.89221 3.87486 9.89136C4.44234 9.89067 5.8569 9.95115 7.49578 10.0328C11.568 10.2357 15.65 10.0619 19.6936 9.53949C21.4676 9.31029 22.9592 9.13483 23.3589 9.13434L26.2985 9.13077C30.819 9.12527 35.3191 9.66989 39.7596 10.5164C41.4245 10.8338 42.8371 11.0662 43.3875 11.0655C45.0113 11.0636 48.8012 12.0367 49.8837 12.0354L63.9562 12.0183L72.6162 12.0078L93.1824 11.005L102.735 10.4756C105.379 10.3291 107.999 9.89601 110.549 9.1839C112.677 8.58993 114.853 8.18982 117.052 7.98848L117.365 7.95985C120.355 7.6861 123.367 7.74958 126.343 8.14911L132.691 9.00142L143.516 8.98826L153.909 10.093C154.556 10.1618 155.209 10.1428 155.851 10.0366L167.27 8.14706C170.765 7.56872 171.425 2.82811 168.221 1.31694C167.632 1.03924 166.983 0.925616 166.335 0.987815C160.082 1.58807 148.677 2.62643 146.215 2.62942L124.024 2.6564L113.854 2.66876C109.103 2.67454 104.37 3.23523 99.7492 4.33945L96.4228 5.1344L84.5168 6.3711L63.215 7.37874C59.7427 7.54299 56.2628 7.41013 52.8132 6.98163L38.5092 5.20481Z'
            fill='url(#paint0_linear_64_50)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_64_50'
              x1='-1.00079'
              y1='6.27375'
              x2='178.694'
              y2='6.05529'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#18A9FF' />
              <stop offset='1' stop-color='#9229FF' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default PageHeader;