import React from 'react';
import './WaypointsBar.scss';

// Import FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import components
import Button from '../../../../components/Button/Button';
import Waypoints from './Waypoints/Waypoints';

export default function WaypointsBar({ waypoints, onWaypointRemoved, isFlying, onStartFlight, onStopFlight }) {
  return (
    <div className="waypoints-bar">
      <div className="heading">
        <h4>Waypoints</h4>
        {/* <FontAwesomeIcon icon={solid('pen')} /> */}
      </div>
      {/* <div className="data">
        <span>
          <p>Altitude</p>
          <p>200m</p>
        </span>
        <span>
          <p>Battery life</p>
          <p>20 min</p>
        </span>
      </div> */}
      <Waypoints waypoints={waypoints} onWaypointRemoved={onWaypointRemoved} />
      {isFlying ? (
        <Button buttonClasses="red fullwidth" onclick={onStopFlight}>
          Stop flight
        </Button>
      ) : (
        <Button buttonClasses="fullwidth" onclick={onStartFlight}>
          Start flight
        </Button>
      )}
    </div>
  );
}
