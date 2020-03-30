import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 import s from  './Map.module.scss'
const AnyReactComponent = ({ text }) => <div className={s.Text}>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={s.container}>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
         
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Встречаемся тут!"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}
 
export default SimpleMap;