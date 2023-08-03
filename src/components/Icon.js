import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {View} from 'react-native';

const Icon = ({
  iconName,
  size,
  strokeColor = 'white',
  strokeWidth = '2.5',
  fill = 'none',
  style = {},
  viewBox = '0 0 24 24',
}) => {
  let path = '';
  switch (iconName) {
    case 'search':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" />
          <Path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6" />
        </>
      );
      break;
    case 'star':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </>
      );
      break;
    case 'share':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M8.7 10.7l6.6 -3.4" />
          <Path d="M8.7 13.3l6.6 3.4" />
        </>
      );
      break;
    case 'menu':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M4 6l16 0" />
          <Path d="M4 12l16 0" />
          <Path d="M4 18l16 0" />
        </>
      );
      break;
    case 'heartFilled':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path
            d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
            strokeWidth={strokeWidth}
            stroke={fill}
            fill={fill}
          />
        </>
      );
      break;
    case 'heart':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </>
      );
      break;
    case 'home':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </>
      );
      break;
    case 'shuffle':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M18 4l3 3l-3 3" />
          <Path d="M18 20l3 -3l-3 -3" />
          <Path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
          <Path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
        </>
      );
      break;
    case 'add':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M12 5l0 14" />
          <Path d="M5 12l14 0" />
        </>
      );
      break;
    case 'flame':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
        </>
      );
      break;
    case 'arrow-back':
      path = (
        <>
          {/* <Path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
          {/* <Path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" /> */}
          <Path d="M8 12l4 4" />
          <Path d="M8 12h8" />
          <Path d="M12 8l-4 4" />
        </>
      );
      break;
    case 'dots':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </>
      );
      break;
    case 'image':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M15 8h.01" />
          <Path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
          <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
          <Path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
        </>
      );
      break;
    case 'download':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
          <Path d="M7 11l5 5l5 -5" />
          <Path d="M12 4l0 12" />
        </>
      );
      break;
    case 'resolution':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        </>
      );
      break;
    case 'folder':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
        </>
      );
      break;
    case 'alert':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <Path d="M12 8v4" />
          <Path d="M12 16h.01" />
        </>
      );
      break;
    case 'report':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
          <Path d="M12 8l0 3" />
          <Path d="M12 14l0 .01" />
        </>
      );
      break;
    case 'share':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M8.7 10.7l6.6 -3.4" />
          <Path d="M8.7 13.3l6.6 3.4" />
        </>
      );
      break;
    case 'logout':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <Path d="M9 12h12l-3 -3" />
          <Path d="M18 15l3 -3" />
        </>
      );
      break;
    case 'heart-broken':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <Path d="M12 6l-2 4l4 3l-2 4v3" />
        </>
      );
      break;
    case 'smile':
      path = (
        <>
          <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
          <Path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
          <Path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
          <Path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
        </>
      );
      break;
    case 'logo':
      path = (
        <>
          <Path
            d="M11.985 57.8448L12.843 57.2634L70 17.9986V0H0V41.3415L33.4085 18.6632H18.4065L8.55279 25.3365V18.6632V8.39013H20.8422H36.4255H61.641V13.5128L58.0427 15.9773L57.1847 16.5864L0 55.8512V73.9052H70V32.5083L36.6192 55.1866H51.6489L61.4749 48.4856V55.1866V65.432H49.2131H33.6022H8.38671V60.3093L11.985 57.8448Z"
            fill={fill}
          />
        </>
      );
      break;
  }

  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={fill}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        // className="icon icon-tabler icon-tabler-search"
        viewBox={viewBox}
        style={style}>
        {path}
        {/* Put all the icon paths here, if/else */}
      </Svg>
    </View>
  );
};

export default Icon;
