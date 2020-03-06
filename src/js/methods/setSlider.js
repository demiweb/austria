import { tns } from 'tiny-slider/src/tiny-slider'
import classNames from '../classNames'
import setLazy from './setLazy'

export default () => {
  const sliders = [...document.querySelectorAll(`.${classNames.slider.container}`)]
  if (!sliders.length) return

  const [heroSlider] = sliders.filter(s => s.dataset.slider === 'hero')
  if (!heroSlider) return

  tns({
    container: heroSlider,
    onInit: setLazy,
    mode: 'gallery',
    autoplay: true,
    autoplayTimeout: 4000,
    controls: false,
  })
}
