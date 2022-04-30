import React from "react"
import PropTypes from "prop-types"

import "./Display.scss"

class Display extends React.Component {
  constructor(props) {
    super(props)

    this.state = { display: props.display }

    this.divRef = React.createRef()
    this.spanRef = React.createRef()
  }

  updateDimensions() {
    this.setState({ ...this.state })
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  getFontSize() {
    return parseFloat(
      window
        .getComputedStyle(this.divRef.current, null)
        .getPropertyValue("font-size")
    )
  }

  reduceFontSize() {
    if (this.divRef.current.clientWidth > this.spanRef.current.clientWidth) {
      return
    }

    this.divRef.current.style.fontSize = this.getFontSize() - 1 + "px"

    this.reduceFontSize()
  }

  resetFontSize() {
    this.divRef.current.style.fontSize = "4rem"
  }

  render() {
    return (
      <div
        ref={this.divRef}
        className="justify-content-center align-item-center Display"
      >
        <span ref={this.spanRef} className="DisplaySpan">
          {this.props.display}
        </span>
      </div>
    )
  }

  componentDidUpdate() {
    let divWidth = this.divRef.current.clientWidth

    this.resetFontSize()
    this.reduceFontSize()

    this.previousWidth = divWidth
  }
}

Display.propTypes = {
  display: PropTypes.string,
}

export default Display
