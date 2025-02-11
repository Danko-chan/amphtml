import {isExperimentOn} from '#experiments';

import {userAssert} from '#utils/log';

import {BaseElement} from './base-element';

import {CSS} from '../../../build/amp-instagram-1.0.css';

/** @const {string} */
const TAG = 'amp-instagram';

class AmpInstagram extends BaseElement {
  /** @override */
  isLayoutSupported(layout) {
    userAssert(
      isExperimentOn(this.win, 'bento') ||
        isExperimentOn(this.win, 'bento-instagram'),
      'expected global "bento" or specific "bento-instagram" experiment to be enabled'
    );
    return super.isLayoutSupported(layout);
  }

  /** @override */
  init() {
    return {
      'requestResize': (height) => this.attemptChangeHeight(height),
    };
  }
}

AMP.extension(TAG, '1.0', (AMP) => {
  AMP.registerElement(TAG, AmpInstagram, CSS);
});
