import React, {Component, ReactNode} from 'react';
import c from "classnames";
import theme from "./Slider.module.css";


/**
 * class Slider
 * @author Ingo Andelhofs
 * @todo: Fix stutter when the drag event starts
 * @todo: Fix the cursor on drag to something different then not-allowed
 */
export default class Slider extends Component<any, any> {
  public refSliderTrack = React.createRef<HTMLDivElement>();
  public refSliderThumb = React.createRef<HTMLDivElement>();
  public get sliderTrack() {
    return this.refSliderTrack.current!;
  }
  public get sliderThumb() {
    return this.refSliderThumb.current!;
  }


  public state: any = {
    maxWidth: 0,
    currentWidth: 0,
    prevWidth: 0,
  };


  private handleUpdateThumb(e: any) {
    const bounding = this.sliderTrack.getBoundingClientRect();
    const thumbWidth = this.sliderThumb.clientWidth;
    const diff = e.pageX - bounding.x;


    if (diff >= 0 && diff <= bounding.width - thumbWidth) {
      this.setState({currentWidth: diff});
    }
    else if (diff < 0 && e.clientX !== 0) {
      this.setState({currentWidth: 0});
    }
    else if (diff > bounding.width - thumbWidth) {
      this.setState({currentWidth: bounding.width - thumbWidth});
    }
  }

  public onDragThumb = (e: any) => {
    e.preventDefault();
    this.handleUpdateThumb(e);
  }

  public onDragThumbStart = (e: any) => {
    // Hide drag image
    e.dataTransfer.setDragImage(new Image(), 0, 0);
  }

  public onTouchMoveThumb = (te: any) => {
    const e = te.touches[0];
    this.handleUpdateThumb(e);
  }



  public render(): ReactNode {
    return <div
      className={c(theme.Slider, "slider")}>

      <div
        ref={this.refSliderTrack}
        className={c(theme.Track, "slider-track")}>
        <div
          style={{left: this.state.currentWidth}}

          draggable
          onDragStart={this.onDragThumbStart}
          onDrag={this.onDragThumb}
          onTouchMove={this.onTouchMoveThumb}

          ref={this.refSliderThumb}
          className={c(theme.Thumb, "slider-thumb")} />
      </div>

    </div>;
  }
}