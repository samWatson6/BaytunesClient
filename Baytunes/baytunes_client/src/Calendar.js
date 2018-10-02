import React, { Component } from "react";
import omit from "lodash/omit";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      focusedInput: props.autoFocusEndDate ? "endDate" : "startDate"
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    setTimeout(() => {
      if (this.state.endDate && this.state.startDate) {
        this.props.changeDate(
          this.state.startDate.format(),
          this.state.endDate.format()
        );
      }
    }, 500);
  }

  onFocusChange(focusedInput) {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  }

  render() {
    const { showInputs } = this.props;
    const { focusedInput, startDate, endDate } = this.state;
    const props = omit(this.props, [
      "autoFocus",
      "autoFocusEndDate",
      "initialStartDate",
      "initialEndDate"
    ]);
    const startDateString = startDate && startDate.format("YYYY-MM-DD");
    const endDateString = endDate && endDate.format("YYYY-MM-DD");

    return (
      <div id="calendar">
        <div className="calendar">
          {showInputs && (
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                name="start_date"
                value={startDateString}
                readOnly
              />
              <input
                type="text"
                name="end_date"
                value={endDateString}
                readOnly
              />
            </div>
          )}
          <DayPickerRangeController
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            onChange // PropTypes.func.isRequired,
          />
        </div>
      </div>
    );
  }
}

//React calendar settings
//---------------------------------------------------
// Calendar.propTypes = propTypes;
// Calendar.defaultProps = defaultProps;

// const ScrollableOrientationShape = PropTypes.oneOf([
//   "horizontal",
//   "vertical",
//   "verticalScrollable"
// ]);

// const defaultProps = {
//   // example props for the demo
//   autoFocus: false,
//   initialDate: null,
//   showInput: false,

//   // day presentation and interaction related props
//   renderCalendarDay: undefined,
//   renderDayContents: null,
//   isDayBlocked: () => false,
//   isDayHighlighted: () => false,
//   enableOutsideDays: false,

//   // calendar presentation and interaction related props
//   orientation: "horizontal",
//   withPortal: false,
//   initialVisibleMonth: null,
//   numberOfMonths: 2,
//   onOutsideClick() {},
//   keepOpenOnDateSelect: false,
//   renderCalendarInfo: null,
//   isRTL: false,

//   // navigation related props
//   navPrev: null,
//   navNext: null,
//   onPrevMonthClick() {},
//   onNextMonthClick() {},

//   // internationalization
//   monthFormat: "MMMM YYYY"
// };

// const propTypes = forbidExtraProps({
//   // example props for the demo
//   autoFocus: PropTypes.bool,
//   initialDate: momentPropTypes.momentObj,
//   showInput: PropTypes.bool,

//   keepOpenOnDateSelect: PropTypes.bool,
//   isOutsideRange: PropTypes.func,
//   isDayBlocked: PropTypes.func,
//   isDayHighlighted: PropTypes.func,

//   // DayPicker props
//   enableOutsideDays: PropTypes.bool,
//   numberOfMonths: PropTypes.number,
//   orientation: ScrollableOrientationShape,
//   withPortal: PropTypes.bool,
//   initialVisibleMonth: PropTypes.func,
//   renderCalendarInfo: PropTypes.func,

//   navPrev: PropTypes.node,
//   navNext: PropTypes.node,

//   onPrevMonthClick: PropTypes.func,
//   onNextMonthClick: PropTypes.func,
//   onOutsideClick: PropTypes.func,
//   renderCalendarDay: PropTypes.func,
//   renderDayContents: PropTypes.func,

//   // i18n
//   monthFormat: PropTypes.string,

//   isRTL: PropTypes.bool
// });

export default Calendar;
