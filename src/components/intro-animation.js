import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import fitCanvas from 'canvas-fit';
import { Noise } from 'noisejs';
import utils from '../utils';

const noiseSeed = Math.random();
const noise = new Noise(noiseSeed);

const PIXEL_RATIO = window.devicePixelRatio || 1;
const DOT_GRID_SIZE = 20 * PIXEL_RATIO;
const DOT_SIZE = 1 * PIXEL_RATIO;

export default class IntroAnimation extends Component {
  canvasRef = React.createRef();
  tickId = null;
  context = null;

  canvasWidth = null;
  canvasHeight = null;
  rows = 0;
  columns = 0;
  noiseZ = 0;

  componentDidMount() {
    const canvasEl = this.canvasRef.current;
    this.context = canvasEl.getContext('2d');
    this.fitCanvas = fitCanvas(canvasEl, canvasEl.parentNode, PIXEL_RATIO);

    window.addEventListener('resize', this.handleResize, false);
    this.handleResize();

    this.tickId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
    cancelAnimationFrame(this.tickId);
  }

  handleResize = throttle(() => {
    this.fitCanvas();
    this.setupGrid();
  }, 200);

  setupGrid = () => {
    const canvas = this.canvasRef.current;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.rows = Math.floor(this.canvasHeight / DOT_GRID_SIZE) + 1;
    this.columns = Math.floor(this.canvasWidth / DOT_GRID_SIZE) + 1;
  };

  setupField = () => {
    noise.seed(Math.random());
    this.noiseField = Array(this.columns).fill(Array(this.rows).fill([0, 0]));
    this.noiseZ = Math.random();
  };

  tick = () => {
    const ctx = this.context;
    const canvas = ctx.canvas;

    this.noiseZ += 0.008;

    ctx.save();
    ctx.translate(DOT_GRID_SIZE / 2, DOT_GRID_SIZE / 2);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        const brightness = utils.range(
          noise.perlin3(x / 30, y / 30, this.noiseZ),
          0,
          1.0,
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        ctx.fillRect(x * DOT_GRID_SIZE, y * DOT_GRID_SIZE, DOT_SIZE, DOT_SIZE);
      }
    }

    ctx.restore();

    this.tickId = requestAnimationFrame(this.tick);
  };

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
