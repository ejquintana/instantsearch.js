import connectRange from '../connectors/connectRange.js';
import React from 'react';
/**
 * Since a lot of sliders already exists, we did not include one by default.
 * However you can easily connect to react-instantsearch an existing one
 * using the [connectRange connector](/connectors/connectRange.html).
 *
 * @name RangeSlider
 * @kind widget
 * @example
 *
 * //Here's an example showing how to connect the airbnb rheostat slider to react-instantsearch using the
 * //range connector
 *
 * import React, {PropTypes} from 'react';
 * import {connectRange} from 'react-instantsearch/connectors';
 * import Rheostat from 'rheostat';
 *
 * const Range = React.createClass({
  propTypes: {
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    currentRefinement: React.PropTypes.object.isRequired,
    refine: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {currentValues: {min: this.props.min, max: this.props.max}};
  },

  onValuesUpdated(sliderState) {
    this.setState({currentValues: {min: sliderState.values[0], max: sliderState.values[1]}});
  },

  onChange(sliderState) {
    if (sliderState.values[0] !== this.props.min || sliderState.values[1] !== this.props.max) {
      this.props.refine({min: sliderState.values[0], max: sliderState.values[1]});
    }
  },

  render() {
    const {min, max, currentRefinement} = this.props;
    const {currentValues} = this.state;
    return (
      <div>
        <Rheostat
          min={min}
          max={max}
          values={[currentRefinement.min, currentRefinement.max]}
          onChange={this.onChange}
          onValuesUpdated={this.onValuesUpdated}
        />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>{currentValues.min}</div>
          <div>{currentValues.max}</div>
        </div>
      </div>
    );
  },
});

 Range.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  currentRefinement: React.PropTypes.object.isRequired,
  refine: React.PropTypes.func.isRequired,
};

 const ConnectedRange = connectRange(Range);

 */
export default connectRange(() =>
  <div>We do not provide any Slider, see the documentation to learn how to connect one easily:
    <a target="_blank" href="https://community.algolia.com/instantsearch.js/react/widgets/RangeSlider.html">
      https://community.algolia.com/instantsearch.js/react/widgets/RangeSlider.html
    </a>
  </div>
);